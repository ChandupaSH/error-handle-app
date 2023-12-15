import { Avatar, useMediaQuery } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { qrresultSelector } from '../slices/slice.js';

const UserPage = () => {
  const qrResult = useSelector(qrresultSelector)
  const navigate = useNavigate()
  const isTablet = useMediaQuery('(min-width: 600px )')
  const avatarW = isTablet ? '38vh' : '25vh'
  const avatarH = isTablet ? '38vh' : '25vh'
  const NavH = isTablet ? '27vh' : '18vh'
  const NavFontSize = isTablet ? '10vh' : '6vh'
  const NavWhiteH = isTablet? '22vh' :' 15vh'
  const TabW = isTablet? '30%' : '90%'
  const TabH = isTablet? '30vh' : '25vh'

  const buttonStyle = {
    width: TabW,
    height: TabH,
    marginTop: '5%',
    borderRadius: '15px',
    border: 'none',
    fontSize: '15px',
    backgroundColor: '#3B1237 ',
    color: 'white'
  }
  
  return (
    <div style={{
      paddingBottom: '20px',
      background: 'linear-gradient(0deg, rgba(255,173,253,1) 0%, rgba(177,177,177,1) 100%)'
    }}>
      <div style={{
       background: 'linear-gradient(90deg, rgba(43,0,46,1) 0%, rgba(121,9,81,1) 45%, rgba(145,100,143,1) 100%)',
        display:'flex',
        justifyContent:'space-between',
        height: NavH}}>

        <div style={{
          color: 'white',
          marginLeft: '20px',
          marginTop: '20px'}}>

          <span style={{
            fontSize:NavFontSize,
            marginTop: '10px'}}>Jessica</span><br/>
          <span style={{fontSize: '3vh'}}>16371</span>
        </div>
        
        <Avatar
          style={{
            border: '5px solid white',
            transform:'translateY(20%)',
            marginRight: '9%'}}
          alt="Remy Sharp"
          src="/avatar.jpg"
          sx={{ width: avatarW, height: avatarH }}
        />
      </div>


      <div style={{
        backgroundColor: 'white',
        height: NavWhiteH,
        color: '#460035 '
      }}>
        <div style={{
          width: '43%',}}>
            <span style={{
              paddingLeft: '10px', 
              fontSize:'20px',
              }}>Today Workout</span><br/>

              <div style={ { 
                display: 'flex',
                
                flexWrap: 'wrap',
                
                marginTop: '10px',
                color: '#5B7000 '
                }}>
                  <span style={{marginLeft: '20px' }}>chest</span>
                  <span style={{marginLeft: '20px' }}>back</span>
                  <span style={{marginLeft: '20px' }}>tricep</span>
                  <span style={{marginLeft: '20px' }}>cardio</span>
              </div>

            
        </div>
        
      </div>

      <div style={{
        display: 'flex',
        justifyContent:'space-around',
        flexWrap: 'wrap',
        marginTop: '10px',
      }}>
        <button style={buttonStyle} onClick={() => {navigate('/todayw')}}>Today Workout</button>
        {
          qrResult? null :
          <button style={buttonStyle} onClick={() => {navigate('/qr')}}>Mark Attendance</button>
        }
        <button style={buttonStyle} onClick={() => {navigate('/workout')}}>My Workout</button>
        <button style={buttonStyle} onClick={() => {}}>Meal Plan</button>
        <button style={buttonStyle} onClick={() => {}}>Delete Account</button>
      </div>




    </div>
  )
}

export default UserPage
