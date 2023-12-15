import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';
import SideMenu from '../components/SideMenu';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar></Navbar>
      <SideMenu style={{zIndex: '1023000'}}></SideMenu>
      
      <button onClick={()=>{navigate('/user')}}>User Page</button>
    </div>
  )
}

export default HomePage
