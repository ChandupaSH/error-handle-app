import React from 'react'
import {  HashRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './scenes/HomePage.jsx'

const App = () => {
  return (
    
      <Router>
        <Routes>
          <Route path='/' element = { <HomePage/>} />
        </Routes>
      </Router> 
  )
}

export default App
