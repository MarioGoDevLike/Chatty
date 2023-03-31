import { useContext } from 'react';
import './App.css';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { AuthContext } from './context/AuthContext.js';

function App() {
  const {currentUser} = useContext(AuthContext)
  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children
  }
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'>
      <Route index element ={
        <ProtectedRoute>
            <Home />
      </ProtectedRoute>
      }></Route>
      <Route path='login' element ={<Login />}></Route>
      <Route path='register'element={<Register />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
