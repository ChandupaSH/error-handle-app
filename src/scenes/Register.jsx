import React from 'react'
import RegisterTab from '../components/RegisterTab';

const Register = () => {
  return (
    <div style={{
        backgroundColor: '#E3B6C9',
        height: '230vw'
    }}>
      <RegisterTab />

      <button style={{
        position: 'relative',
        height: '30px',
        top: '4vw'
      }}>next</button>
    </div>
  )
}

export default Register
