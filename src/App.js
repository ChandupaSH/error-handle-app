import React from 'react'
import {  HashRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './scenes/HomePage'
import UserPage from './scenes/UserPage'

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path='/' element = { <HomePage/>} />
          <Route path='/user' element = { <UserPage/>} />
        </Routes>
      </Router> 
  )
}

export default App
