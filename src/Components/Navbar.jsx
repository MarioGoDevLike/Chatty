import React from 'react'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>Chats</span> 
        <div className='user'>
            <img src='https://images.pexels.com/photos/6973694/pexels-photo-6973694.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt=''/>
            <span>John</span>
            <button>Logout</button>
        </div>
    </div>
  )
}
