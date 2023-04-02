import { useState } from "react";
import "./Search.scss"
import {query, collection, where, getDocs} from "firebase/firestore"
import { db } from "../../firebase";


const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)
  

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
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find the user" onKeyDown={handleKey} onChange={e => setUsername(e.target.value)}/>
      </div>
      {err && <span>User not Found</span>}
      {user && <div className="userChat">
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
