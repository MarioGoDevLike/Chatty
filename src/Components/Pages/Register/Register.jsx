import './Register.scss'
import avatar from "../../../assets/addavatar.png"
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth,storage } from '../../../firebase'
import { useState } from 'react'
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


const Register = () =>{
    const [err,setErr] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault()
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];
        
        try{
            const res = createUserWithEmailAndPassword(auth, email, password);
            const storageRef = ref(storage, displayName);

            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                (error) =>{
                    setErr(true)
                },
                () => {
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
                displayName,
                photoURL:downloadURL,
            });
            });
        }
        );
        }
        catch(err){
            setErr(true)
        }

    };
    return(
        <div className='Main-container'>
            <div className='form-container'>
                <span className='logo'>Chatty</span>
                <span className='title'>Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='UserName'/>
                    <input type="email" placeholder='Email'/>
                    <input type="password" placeholder='Password' />
                    <input className='picture' type="file" id='file'/>
                    <label className="imglabel" htmlFor='file'>
                        <img className="avatarimage" src={avatar}/>
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>Don't have an account? <b>Login</b></p>
            </div>

        </div>
    )
}

export default Register;