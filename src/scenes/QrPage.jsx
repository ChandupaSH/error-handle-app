import React from 'react'
import QrScanner from '../components/QrScanner'
import {  useMediaQuery } from '@mui/material'

const QrPage = () => {
  const isTablet = useMediaQuery('(min-width: 500px )')
  const widthIs = isTablet? '10px':'10px'
  return (

    <div style={{ 
      backgroundColor: '#FFC6F9 ',
      display: 'flex',
      justifyItems: 'center',
      height: '80vh'
      }}>       
        <QrScanner style={{widthIs}}/>
    </div>
  )
}

export default QrPage

