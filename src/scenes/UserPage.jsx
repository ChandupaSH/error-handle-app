import { Avatar, useMediaQuery } from '@mui/material'
import React from 'react'

const UserPage = () => {
  const isTablet = useMediaQuery('(min-width: 600px )')
  const avatarW = isTablet ? '38vh' : '25vh'
  const avatarH = isTablet ? '38vh' : '25vh'
  const NavH = isTablet ? '27vh' : '18vh'
  const NavFontSize = isTablet ? '10vh' : '6vh'
  
  return (
    <div style={{
      height: '100vh',
      background: 'rgb(255,173,253)',
      background: 'linear-gradient(0deg, rgba(255,173,253,1) 0%, rgba(177,177,177,1) 100%)'
    }}>
      <div style={{
       background: 'rgb(43,0,46)',
       background: 'linear-gradient(90deg, rgba(43,0,46,1) 0%, rgba(121,9,81,1) 45%, rgba(145,100,143,1) 100%)',
        display:'flex',
        justifyContent:'space-between',
        height: NavH}}>

        <div style={{
          color: 'white',
          marginLeft: '20px',
          marginTop: '30px'}}>

          <span style={{
            fontSize:NavFontSize,
            marginTop: '90px'}}>Jessica</span><br/>
          <span style={{fontSize: '3vh'}}>16371</span>
        </div>
        
        <Avatar
          style={{
            border: '3px solid white',
            transform:'translateY(20%)',
            marginRight: '9%'}}
          alt="Remy Sharp"
          src="/avatar.jpg"
          sx={{ width: avatarW, height: avatarH }}
        />
      </div>



    </div>
  )
}

export default UserPage
