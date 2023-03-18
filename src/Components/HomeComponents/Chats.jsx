import { useState } from "react"
import "./Chats.scss"



const Chats = () => {

  const accounts = [{
    userName:'Jimmy',
    userText:'Hello'
  },
  {
    userName:'Jim',
    userText:'Hello'
  },{
    userName:'James',
    userText:'Hello'
  }]

  const accMap = accounts.map((item) => {
    return(
  <div className="chats">
        <div className="userChat">
          <img src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></img>

          <div className="userChatInfo">
              <span>{item.userName}</span>
              <p>{item.userText}</p>
          </div>
        </div>
    </div>
    )
  })
  return (
    accMap
  )
}

export default Chats
