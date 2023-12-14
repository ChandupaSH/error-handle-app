import React from 'react'
import {  HashRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import HomePage from './scenes/HomePage.jsx'
import UserPage from './scenes/UserPage.jsx'

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element = { <HomePage/>} />
          <Route path='/user' element = { <UserPage/>} />
        </Routes>
      </BrowserRouter> 
  )
}

export default App
