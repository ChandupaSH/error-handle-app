import React from 'react'
import SideMenu from '../components/SideMenu';
import Navlanding from '../components/Navlanding';
import HomeTabs from '../components/HomeTabs';
import { useMediaQuery } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

const HomePage = () => {
  const isTablet = useMediaQuery('(min-width: 500px )')
  // const widthIs = isTablet? '50%':'100%'

  return (
    <div style={{
      backgroundColor:'#FFC0C0',
      }}>

        {isTablet? 

        <div style={{
          width: '100vw',
          height: '100vh',
          fontSize: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>

          <div style={{textAlign: 'center'}}>
            <SettingsIcon style={{fontSize: '200px'}} /><br/>
            <span >Desktop version under the development</span><br/>
            <span style={{fontSize: '29px'}}>To see..  right click - inspect - toggle device toolbar - add any mobile device</span>
          </div>
          
              
        </div>
        
         : 
        <div>
          <Navlanding ></Navlanding>
          <HomeTabs></HomeTabs>       
          <SideMenu style={{zIndex: '1023000'}}></SideMenu>
        </div>
        
        }

      

      

       
      
      
    </div>
  )
}

export default HomePage
