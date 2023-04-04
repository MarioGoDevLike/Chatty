import "./Input.scss"
import Attach from "../../assets/paperclip.png"
import { useContext, useState } from "react"
import { arrayUnion, doc, updateDoc } from "firebase/firestore"
import { db } from "../../firebase";
import { v4 as uuid} from "uuid";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";


const Input = () => {

  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)

  // const handleSend = async () => {
  //   if(img){

  //   }else{
  //      await updateDoc(doc(db,"chat", data.chatId), {
  //       messages: arrayUnion({
  //         id:
  //       })
  //      })
  //   }
  // }

  return (
    <div className="input">
      <input type="text" placeholder="Type Something..." onChange={e=>{setText(e.target.value)}}></input>
      <div className="send">
        <img className="attach" src={Attach} alt="" width="30px" height="30px" />
        <input type="file" style={{display:"none"}} id="file"onChange={e=>setImg(e.target.files[0])}/>
        <label htmlFor="file">
          <img className="imgattach" src={img}/>
        </label>
        <button onClick={"handleSend"}>Send</button>
      </div>
    </div>
  )
}

export default Input
