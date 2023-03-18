import './Register.scss'
import avatar from "../../../assets/addavatar.png"

const Register = () =>{
    return(
        <div className='Main-container'>
            <div className='form-container'>
                <span className='logo'>Chatty</span>
                <span className='title'>Register</span>
                <form>
                    <input type="text" placeholder='UserName'/>
                    <input type="email" placeholder='Email'/>
                    <input type="password" placeholder='Password' />
                    <input className='picture' type="file" id='file'/>
                    <label className="imglabel" htmlFor='file'>
                        <img className="avatarimage" src={avatar}/>
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>
                </form>
                <p>Don't have an account? <b>Login</b></p>
            </div>

        </div>
    )
}

export default Register;