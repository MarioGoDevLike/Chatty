import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth , storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export const Register = () => {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try{
      const rest = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage,displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) =>{
          setErr(true);
        },() =>{
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL)=>{
            await updateProfile(rest.user,{
              displayName,
              photoURL:downloadURL,
            } )
          });
        }
      )
    }catch(err){
      setErr(true);
    }
     
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chatty</span>
        <span className="title">Register</span>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Display name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input style={{ display: "none" }} type="file" />
          <label htmlFor="file">
            <img src={Add} alt=""></img>
            <span>Add an Avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        {err && <span>Something went wrong</span>}
        <p>Do you already have an account? Login</p>
      </div>
    </div>
  );
};
