import React from 'react';
import Add from "../img/addAvatar.png";

export const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Chatty</span>
            <span className='title'>Register</span>
            
            <form>
                <input type='text' placeholder='Display name'/>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='Password'/>
                <input style={{display:"none"}}type='file'/>
                <label htmlFor='file'>
                    <img src={Add} alt=''></img>
                    <span>Add an Avatar</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>Do you already have an account? Login</p>
        </div>
    </div>
  )
}
