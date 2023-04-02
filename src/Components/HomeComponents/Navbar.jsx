import "./Navbar.scss"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth, db } from "../../firebase"
import { useContext, useEffect, useState } from "react"
import {collection,getDocs, where} from "firebase/firestore"




const Navbar = () => {
  

  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, fetch data from Firestore
        const query = where("uid", "==", user.uid);
        getDocs(collection(db, "users"), query)
          .then((querySnapshot) => {
            const newData = [];
            querySnapshot.forEach((doc) => {
              newData.push({ id: doc.id, ...doc.data() });
            });
            setData(newData);
          })
          .catch((error) => {
            console.error("Error fetching data: ", error);
          });
      } else {
        // User is signed out, clear the data
        setData([]);
      }
    });

    return () => unsubscribe();
  }, []);


  return (
    <div className="navbar">
        <span className="appName">Chatty</span>
        <div className="user">
        {data.map((item) => {
        if (item.uid === auth.currentUser.uid) {
          return (
            <div className="infoDiv" key={item.id}>
              <img src={item.photoURL} alt="" />
              <span>{item.displayName}</span>
            </div>
          );
        }
        return null;
      })}
            <div>
                <button onClick={() => signOut(auth)}>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
