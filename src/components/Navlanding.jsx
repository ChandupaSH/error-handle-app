import { IconButton} from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sideMenuChange, sideMenuSelector } from '../slices/slice'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';

const Navlanding = () => {
  // const isTablet = useMediaQuery('(min-width: 500px )')
  const isClose = useSelector(sideMenuSelector)
  const dispatch = useDispatch()

  return (
    <div style={{width: '100%',margin: 0}}>

        <img src='/m_nav_rect.png' alt='m_nav_rect.png'
            style={{
              
                width:'100%',
                position: 'absolute',
                right: '0',}}/>

        <img src='/m_nav_curve.png' alt='m_nav_curve.png'
            style={{
                width:'100%',
                position: 'absolute'}}/>

        <img src='/nav_girl2.png'  alt='nav_girl2.png'
            style={{
                margin: '0',
                height: '48%',
                position: 'absolute',
                top: '11.5%',
                right: '0',
                overflow: 'hidden'}}/>

        <div style={{
          display: 'flex',
          position: 'relative',
          top: '2vh' ,
          marginLeft: '2vh'
          }}>
            <IconButton style={{}} onClick={() => {
              dispatch(sideMenuChange())}}>
              {isClose? <DensityMediumIcon style={{color:'#590044'}} />: <CloseIcon  style={{color:'#590044'}} />}
            </IconButton>
        </div>      

        <div style={{
          position: 'absolute',
          top: '1.5%',
          left: '11vh',
          fontSize: '5vh'}}>
          <span style={{color: '#340035'}}>Mucle</span>
          <span style={{color: 'white'}}>Beast</span>
        </div>


        <PersonIcon style={{
          position: 'absolute',
          right: '4%',
          top: '2.5vh',
          fontSize: '35px',
          color: 'white'
        }}></PersonIcon>

        <div style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          fontSize: '5vh'
        }}>
          <span style={{
            color: '#340035'
          }}>Shape Your</span><br/>
          <span style={{
            color: 'white',
            marginLeft: '2vh'
          }}>Dream Body</span>
        </div>

        <img src='/m_nav_circles.png' alt='m_nav_circles' style={{
          position: 'absolute',
          width: '20vh',
          top: '42vh',
          left: '2vh'
        }} />

        <span style={{
          position: 'absolute',
          color: 'white',
          width: '35%',
          top: '35%',
          left: '20%',
          textAlign: 'center'
        }}>
        Elevate your fitness journey at our empowering and inclusive gym.
        </span>

        
    </div>
  )
}

export default Navlanding
