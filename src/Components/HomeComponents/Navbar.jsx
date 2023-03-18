import "./Navbar.scss"
import picture from "../../assets/addavatar.png"


const Navbar = () => {
  return (
    <div className="navbar">
        <span className="appName">Chatty</span>
        <div className="user">
            {/* replace user Avatar and put instead this img */}
            <img src={picture} alt=""></img>
            {/* change john and put instead the user's Name */}
            <span>John</span>
            <div>
                <button>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
