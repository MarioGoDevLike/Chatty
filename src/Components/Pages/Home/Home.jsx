import './Home.scss'
import Sidebar from "../../HomeComponents/Sidebar"
import Chat from "../../HomeComponents/Chat"


const Home = () =>{
    return(
        <div className='home'>
           <div className="container">
            <Sidebar />
            <Chat />
            </div> 
        </div>
    )
}

export default Home;