import React from 'react'
import QrScanner from '../components/QrScanner'
import {  useMediaQuery } from '@mui/material'
// import {  useSelector } from 'react-redux'
// import { qrresultSelector } from '../slices/slice'

const QrPage = () => {
  const isTablet = useMediaQuery('(min-width: 500px )')
  const widthIs = isTablet? '10px':'10px'
  // const marginTop = isTablet? '7%': '20%'
  // const navigate = useNavigate()
  // const dispatch = useDispatch()
  // const resultSelector = useSelector(qrresultSelector)

  return (
    <div style={{ 
      backgroundColor: '#FFC6F9 ',
      // width: '100px',
      // height: '50px',
      display: 'flex',
      justifyItems: 'center',
      height: '100vh'}}>
        {/* {
          resultSelector ?   null :<QR_scannerC style={{widthIs}}/>
        } */}
        <QrScanner style={{widthIs}}/>

        {/* {
          resultSelector ? <span style={{ color: 'green'}}>result is :{resultSelector}</span> : null
        } */}
      
    </div>
  )
}

export default QrPage

