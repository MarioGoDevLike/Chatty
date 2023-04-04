import { useContext, useState } from "react";
import "./Search.scss"
import {query, collection, where, getDoc,getDocs, setDoc, updateDoc, serverTimestamp,doc} from "firebase/firestore"
import { auth, db } from "../../firebase";
import {AuthContext} from "../../context/AuthContext"


const Search = () => {
  
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)
  

  const {currentUser} = useContext(AuthContext)
  

  const handleSearch = async () =>{
    const q = query(
      collection(db, "users"), where("displayName", "==", username)
    );
    try{
    
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setUser(doc.data())
    });
    }catch(err){
      setErr(true)
    }

  }

  const handleKey = (e) =>{ 
    e.code === "Enter" && handleSearch();
  }
  

  const handleSelect = async () => {
    const combineId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;


  
    try {
      const res = await getDoc(doc(db, "chats", combineId));
  
      if (!res.exists()) {
        
        await updateDoc(doc(db, "usersChat", currentUser.uid), {
          [combineId]: {
            userInfo: {
              uid: user.uid,
              displayName:user.displayName,
              photoURL:user.photoURL
            },
            date: serverTimestamp(),
          },
        });
  
        await setDoc(doc(db, "chats", combineId), { messages: [] });
      }
    } catch (err) {
      console.error(err);
    }
    setUser(null)
    setUsername("")
  };

  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find the user" onKeyDown={handleKey} onChange={e => setUsername(e.target.value)}/>
      </div>
      {err && <span>User not Found</span>}
      {user && <div className="userChat" onClick={handleSelect}>
        <div>
          <img src={user.photoURL} alt=""></img>
        </div>
        <div className="userChatInfo">
          <span>{user.displayName}</span>
        </div>
      </div>}
    </div>
  )
}

export default Search;
