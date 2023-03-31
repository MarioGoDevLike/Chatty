import './Register.scss'
import avatar from "../../../assets/addavatar.png"
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth'
import { auth,db,storage} from '../../../firebase'
import { useState } from 'react'
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {setDoc, doc} from "firebase/firestore"
import { Link, useNavigate } from 'react-router-dom'


const Register = () =>{
    const [err,setErr] = useState(false);
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        
        try{
            const res = createUserWithEmailAndPassword(auth, email, password);      
            const storageRef = ref(storage, displayName);
            const userUid = auth.currentUser.uid;
            
            
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                (error) =>{
                    console.log(error);
                    setErr(true)
                },
                () => {
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await setDoc(doc(db, "users",userUid), {
            uid:userUid,
            displayName,
            email,
            photoURL:downloadURL,
            }); 
            await setDoc(doc(db, "usersChat", userUid), {})

            await updateProfile(res.user, {
                displayName,
                photoURL:downloadURL,
            })
            });
            navigate("/")
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
                    {err && <span style={{textAlign:"center", color:"red"}}>Something went wrong</span>}
                </form>
                <p>Don't have an account? <Link to="/login"><b>Login</b></Link></p>
            </div>

        </div>
    )
}

export default Register;