import "./Input.scss"
import Attach from "../../assets/paperclip.png"
import { useContext, useState } from "react"
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from "firebase/firestore"
import { db, storage } from "../../firebase";
import { v4 as uuid} from "uuid";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { ref,uploadBytesResumable, getDownloadURL } from "firebase/storage";


const Input = () => {

  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)

  const handleSend = async () => {
    if(img){

      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) =>{
            // setErr(true)
        },
        () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          await updateDoc(doc(db,"chats", data.chatId), {
            messages: arrayUnion({
              id:uuid(),
              text,
              senderId:currentUser.uid,
              date: Timestamp.now(),
              img:downloadURL,
            })
           })
          });      
        }
      );

    }else{
       await updateDoc(doc(db,"chats", data.chatId), {
        messages: arrayUnion({
          id:uuid(),
          text,
          senderId:currentUser.uid,
          date: Timestamp.now(),
        })
       })
    }
    await updateDoc(doc(db, "usersChat", data.user.uid), {
      [data.chatId + ".lastMessage"]:{
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    })
    setText("")
    setImg(null)
  }

  return (
    <div className="input">
      <input type="text" placeholder="Type Something..." value={text} onChange={e=>{setText(e.target.value)}}></input>
      <div className="send">
        <img className="attach" src={Attach} alt="" width="30px" height="30px" />
        {/* fix l input l akhou l sharmouta */}
        <input type="file" style={{display:"none"}} id="file"onChange={e=>setImg(e.target.files[0])}/>
        <label htmlFor="file">
          <img className="imgattach" src={img}/>
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default Input
