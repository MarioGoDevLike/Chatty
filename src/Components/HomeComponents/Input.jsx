import "./Input.scss"
import Attach from "../../assets/paperclip.png"
import img from "../../assets/image.png"


const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type Something..."></input>
      <div className="send">
        <img className="attach" src={Attach} alt="" width="30px" height="30px" />
        <input type="file" style={{display:"none"}} id="file"/>
        <label htmlFor="file">
          <img className="imgattach" src={img}/>
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input
