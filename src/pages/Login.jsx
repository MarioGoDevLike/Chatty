import React from 'react';
import Add from "../img/addAvatar.png";

export const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Chatty</span>
            <span className='title'>Login</span>
            
            <form>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='Password'/>
                <button>Sign in</button>
            </form>
            <p>You don't have an account? Register</p>
        </div>
    </div>
  )
}
