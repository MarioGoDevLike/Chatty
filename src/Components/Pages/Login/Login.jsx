import { Link, useNavigate } from 'react-router-dom';
import './Login.scss'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../../firebase';


const Login = () =>{

    const [err,setErr] = useState(false);
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = e.target[0].value;
        const password = e.target[1].value;
      
        try{
            await signInWithEmailAndPassword(auth, email,password)
            navigate("/")
        
        }
        catch(err){
            setErr(err)
        }
         
        
    }




    return(
        <div className='Main-container'>
            <div className='form-container'>
                <span className='logo'>Chatty</span>
                <span className='title'>Sign in</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder='Email'/>
                    <input type="password" placeholder='Password' />                    
                    <button>Login</button>
                     {err && <span style={{textAlign:"center",color:"red"}}>Something went wrong</span>}
                </form>
                <p>Don't have an account? <Link to="/register"><b>Register</b></Link></p>
            </div>

        </div>
    )
}

export default Login;