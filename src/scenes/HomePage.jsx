import React from 'react'
import Navbar from '../components/Navbar';
import SideMenu from '../components/SideMenu';
import SlideShow from '../components/SlideShow';

const HomePage = () => {

  return (
    <div>
      <Navbar></Navbar>
      <SideMenu style={{zIndex: '1023000'}}></SideMenu>

      <div style={{width: '100%' }}>
          <SlideShow></SlideShow>
        </div>

       
      
      
    </div>
  )
}

export default HomePage
