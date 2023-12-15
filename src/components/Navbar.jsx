import React from 'react'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import {  IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { sideMenuChange, sideMenuSelector } from '../slices/slice.js';
import { useSelector, useDispatch } from 'react-redux';
import {  useMediaQuery } from '@mui/material'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()
  const isTablet = useMediaQuery('(min-width: 500px )')
  const marLeft = isTablet? '10px' : '1px'
  const marRight = isTablet ? '20px' : '10px'
  const isClose = useSelector(sideMenuSelector)
  const dispatch = useDispatch()
  
  return (
    <div style={{
    //   borderColor: 'black',
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor : '#E8B5DC'
      }}>
        <div style={{
          display: 'flex'}}>

          <div style={{display: 'flex', paddingLeft: marLeft}}>
            <IconButton style={{margin: 'auto auto auto 10px'}} onClick={() => {
              dispatch(sideMenuChange())}}>
              {isClose? <DensityMediumIcon style={{color:'#590044'}} />: <CloseIcon  style={{color:'#590044'}} />}
            </IconButton>
          </div>
          
          {/* <img src='/logo.png' style={{height: '100px'}} /> */}
          <div style={{display: 'flex'}}>
          <h2 style={{color: '#590044', marginLeft: '10px', }}>Muscle</h2>
          <h2 style={{color: 'white' , marginLeft: '5px'}}>Best</h2>
          </div>
          
        </div>

        
          <div style={{
            display: 'flex',
            justifyContent: 'center'}}>
              
              
              <IconButton onClick={() => {navigate('/user')}} style={{margin: `auto ${marRight} auto auto`}}>
                <Person2OutlinedIcon  style={{color:'#590044'}}></Person2OutlinedIcon>
              </IconButton>
              <IconButton style={{margin: `auto ${marRight} auto auto`}}>
                <ShoppingCartOutlinedIcon  style={{color:'#590044'}}></ShoppingCartOutlinedIcon>
              </IconButton>
          
        </div>

        
        
    </div>
  )
}

export default Navbar