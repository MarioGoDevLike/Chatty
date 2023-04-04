import "./Chat.scss"
import Messages from "./Messages"
import Input from "./Input"
import { useContext } from "react"
import { ChatContext } from "../../context/ChatContext"


const Chat = () => {

  const {data} = useContext(ChatContext);


  return (
    <div className="Chat">
      <div className="chatInfo"> 
        <span>{data.user?.displayName}</span>
      </div>
      <Messages />
      <Input />

    </div>
  )
}

export default Chat;
