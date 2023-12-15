import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import { sideMenuSelector } from '../slices/slice';
import { useNavigate } from 'react-router-dom';


const SideMenu = () => {
    const navigate = useNavigate()
    const isTablet = useMediaQuery('(min-width: 600px )')
    const widthIs = isTablet? '50%':'100%'
    const leftIs = isTablet? '-50%':'-100%'
    const isClose = useSelector(sideMenuSelector)
    const close = isClose? 'translateX(0)' : 'translateX(100%)'
    const liStyle = {
        fontSize: 'x-large',
        padding: '10% 0 10px 20px',
        color: 'white',
        cursor: 'pointer'
    }

    
    
  return (
    <div style={{zIndex: '10000',
    position: 'absolute',
    left: leftIs,
    transform:close, 
    transition: '0.2s',
    width: widthIs,
    backgroundColor: '#3F0038',
    opacity: '0.95'
    }}>
        <Box sx={{
            height: '90vh',
        }} >
            <ul style={{
                listStyle: 'none',
                height: '100%'
            }}>
                <li onClick={() => {navigate('/user')}} style={liStyle}>My Account</li>
                {/* <li onClick={() => {}} style={liStyle}>Suppliments</li> */}
                <li onClick={() => {}} style={liStyle}>Workouts</li>
                <li onClick={() => {}} style={liStyle}>Trainers</li>
                <li onClick={() => {}} style={liStyle}>Contact us</li>
            </ul>
        </Box>
        
    </div>
  )
}

export default SideMenu




