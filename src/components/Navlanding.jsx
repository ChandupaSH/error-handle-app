import { IconButton} from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sideMenuChange, sideMenuSelector } from '../slices/slice'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';
import { motion,useScroll,  useTransform } from 'framer-motion'

const Navlanding = () => {
  // const isTablet = useMediaQuery('(min-width: 500px )')
  const isClose = useSelector(sideMenuSelector)
  const dispatch = useDispatch()

  const { scrollYProgress} = useScroll()
  const opacity = useTransform(scrollYProgress,[0,0.3],[1, 0])
  const width = useTransform(scrollYProgress,[0,0.2],[100, 120])

 

  return (
    <motion.div style={{
      margin: 0,
      opacity: opacity,
      width: '100%',
     
      }}>

        <img src='/nav_l_full.png' alt='m_nav_rect.png'
            style={{
                width:'100%',
                // position: 'absolute',
                right: '0',}}/>


        <div style={{
          display: 'flex',
          position: 'absolute',
          top: '1.5vh' ,
          marginLeft: '2vh'
          }}>
            <IconButton style={{}} onClick={() => {
              dispatch(sideMenuChange())}}>
              {isClose? <DensityMediumIcon style={{color:'#590044'}} />: <CloseIcon  style={{color:'#590044'}} />}
            </IconButton>
        </div>      

        
    </motion.div>
  )
}

export default Navlanding
