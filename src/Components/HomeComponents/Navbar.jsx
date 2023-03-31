import "./Navbar.scss"
import { signOut } from "firebase/auth"
import { auth } from "../../firebase"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"


const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className="navbar">
        <span className="appName">Chatty</span>
        <div className="user">
            {/* replace user Avatar and put instead this img */}
            <img src={currentUser.photoURL} alt=""></img>
            {/* change john and put instead the user's Name */}
            <span>{currentUser.displayName}</span>
            <div>
                <button onClick={() => signOut(auth)}>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
