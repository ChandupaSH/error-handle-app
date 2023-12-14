import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar/>
      <h1>HomePage</h1>
      <button onClick={()=>{navigate('/user')}}>User Page</button>
    </div>
  )
}

export default HomePage
