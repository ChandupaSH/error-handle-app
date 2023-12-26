import { Avatar } from '@mui/material'
import React from 'react'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { qrresultSelector } from '../slices/slice.js';

const UserPage = () => {
  // const qrResult = useSelector(qrresultSelector)
  // const navigate = useNavigate()
  // const isTablet = useMediaQuery('(min-width: 600px )')
  

  
  return (
    <div style={{
      backgroundColor: '#E3B6C9',
      height: '190vh',
    }}>

      <div style={{
      }}>
        <img src="/m_user_nav.png" alt="m_user_nav" style={{
          width: '100%',
        }}
        />
        <span style={{
          fontSize: '35px',
          position: 'absolute',
          top: '18px',
          color: 'white',
          left: '15vw',
        }}>Jessica</span><br/>

        <span style={{
          fontSize: '20px',
          position: 'absolute',
          top: '68px',
          color: 'white',
          left: '15vw',
          
        }}>24189</span>

        <div style={{
          position: 'absolute' ,
          // border: '1px solid black',
          display: 'flex',
          width: '30vw',
          left: '65vw',
          flexWrap: 'wrap',
          top: '50px',
          rowGap: '8px'
          }}>
          <span style={{
            color: '#F0F500',
            fontSize: '14px',
            width: '15vw'
          }}>Chest</span>

          <span style={{
            color: '#F0F500',
            fontSize: '14px',
            width: '15vw'
          }}>Back</span>

          <span style={{
            color: '#F0F500',
            fontSize: '14px',
            width: '15vw'
          }}>Bicep</span>
        </div>

        <div style={{
          position: 'absolute',
          left: '65vw',
          top: '40.5vw'
        }}> 
          <Avatar
            style={{
              border: '3px solid white',
            }}
            alt="Remy Sharp"
            src="/avatar.jpg"
            sx={{ width: '30vw', height: '30vw' }}
          />
        </div>

        

      </div>
      
      <div style={{
        position: 'absolute',
        top: '58.92vw',
        width: '100%'
        }}>

        <div style={{
          position: 'relative',
          left: '5.9vw',
          width: '90vw'
          }}>
          <img src="/m_user_tab1.png" alt="" style={{
            maxWidth: '90vw',
            position: 'absolute'
            }} />

            <div style={{
              width: '80vw',
              position: 'relative',
              top: '38.14vw',
              left: '5.5%',
              display:'flex',
              justifyContent: 'space-between'
            }}>
              <img src="/m_user_pro_tab1.png" alt="" style={{
              position: 'relative',
              width: '24.05vw'
              }} />
              <img src="/m_user_pro_tab2.png" alt="" style={{
              position: 'relative',
              width: '24.05vw'
              }} />
              <img src="/m_user_pro_tab3.png" alt="" style={{
              position: 'relative',
              width: '24.05vw'
              }} />
            </div>

          <div style={{
            position: 'relative',
            top: '44vw',
            left: '5vw'
            }}>
            <span style={{color: 'white'}}>Total Calorie burn :</span>
            <span style={{color: '#61FF00'}}>100 kcal</span><br/>

            <span style={{color: 'white',marginTop: '20vw'}}>Total days :</span>
            <span style={{color: '#61FF00'}}>111</span><br/>
          </div>  
        </div>

        <div style={{
          // border: '1px green solid',
          position: 'absolute',
          top: '78vw',
          left: '5.9vw'
          }}>
          <img src="/m_user_tab2.png" alt="" style={{marginRight:'2vw', maxWidth: '43.76vw' }} />
          <img src="/m_user_tab3.png" alt="" style={{maxWidth: '43.76vw'}}/>

          <img src="/m_user_tab4.png" alt="" style={{marginRight:'2vw',marginTop: '1vw',maxWidth: '43.76vw'}}/>
          <img src="/m_user_tab5.png" alt="" style={{marginTop: '1vw',maxWidth: '43.76vw'}}/>

          <img src="/m_user_tab6.png" alt="" style={{marginRight:'2vw',marginTop: '1vw',maxWidth: '43.76vw'}}/>
          <img src="/m_user_tab7.png" alt="" style={{marginTop: '1vw',maxWidth: '43.76vw'}}/>
        </div>

      </div>  
        
      



    </div>
  )
}

export default UserPage
