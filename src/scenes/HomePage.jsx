import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={()=>{navigate('/user')}}>User Page</button>
    </div>
  )
}

export default HomePage
