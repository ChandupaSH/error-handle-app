import React from 'react'
import QrScanner from '../components/QrScanner'
import {  useMediaQuery } from '@mui/material'
import { useSelector } from 'react-redux'
import { qrresultSelector } from '../slices/slice'
import { useNavigate } from 'react-router-dom'

const QrPage = () => {
  const qrResult = useSelector(qrresultSelector)
  const isTablet = useMediaQuery('(min-width: 500px )')
  const widthIs = isTablet? '10px':'10px'
  const navigate = useNavigate()

  

  return (
    <div style={{ 
      backgroundColor: '#FFC6F9 ',
      display: 'flex',
      justifyItems: 'center',
      height: '100vh'
      }}>
        {
          qrResult? 
          <div style={{marginTop: '30%',width: '100%', marginLeft: '30%'}}>
            <span style={{
              fontSize: '30px', 
              width: '100%',
              color: 'green',
              transform: 'scale(1.2)',
              transition: '0.5s'
              }}>marked</span><br/>
            <button onClick={() => {navigate('/user')}}
              style={{
                fontSize: '15px',
                border:'none',
                backgroundColor: 'green',
                height: '30px',
                marginTop: '20px',
                color: 'white'
              }}
            >back to my account</button>
          </div>
          
          : <QrScanner style={{widthIs}}/>
        }       
        
    </div>
  )
}

export default QrPage

