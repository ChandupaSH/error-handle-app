import React from 'react'
// import Navbar from '../components/Navbar';
import SideMenu from '../components/SideMenu';
// import SlideShow from '../components/SlideShow';
import Navlanding from '../components/Navlanding';
import HomeTabs from '../components/HomeTabs';

const HomePage = () => {
  

  return (
    <div style={{backgroundColor:'#FFC0C0',height: '500vh'}}>
      {/* <Navbar></Navbar> */}
      <Navlanding ></Navlanding>
      <HomeTabs></HomeTabs>
    
      <SideMenu style={{zIndex: '1023000'}}></SideMenu>

      

       
      
      
    </div>
  )
}

export default HomePage
