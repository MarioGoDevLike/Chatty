import "./Chat.scss"
import Messages from "./Messages"
import Input from "./Input"


const Chat = () => {
  return (
    <div className="Chat">
      <div className="chatInfo"> 
        <span>James</span>
      </div>
      <Messages />
      <Input />

    </div>
  )
}

export default Chat;
