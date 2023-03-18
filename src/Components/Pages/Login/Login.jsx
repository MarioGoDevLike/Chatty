import './Login.scss'

const Login = () =>{
    return(
        <div className='Main-container'>
            <div className='form-container'>
                <span className='logo'>Chatty</span>
                <span className='title'>Sign in</span>
                <form>
                    <input type="email" placeholder='Email'/>
                    <input type="password" placeholder='Password' />                    
                    <button>Login</button>
                </form>
                <p>Don't have an account? <b>Register</b></p>
            </div>

        </div>
    )
}

export default Login;