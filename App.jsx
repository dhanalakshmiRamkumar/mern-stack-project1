import { useState } from 'react'

import './App.css';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<SignUp/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Home" element={<Home/>} />
    </Routes>
    

  
    </>
  )  
}

export default App
