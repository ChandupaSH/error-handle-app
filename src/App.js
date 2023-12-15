import React from 'react'
import {  HashRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './scenes/HomePage'
import UserPage from './scenes/UserPage'
import WorkoutPage from './scenes/WorkoutPage'
import TodayWPage from './scenes/TodayWPage'
import QrPage from './scenes/QrPage'

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path='/' element = { <HomePage/>}/>
          <Route path='/user' element = { <UserPage/>}/>
          <Route path='/qr' element = { <QrPage/>}/>
          <Route path='/workout' element = { <WorkoutPage/>}/>
          <Route path='/todayw' element = { <TodayWPage/>}/>
        </Routes>
      </Router> 
  )
}

export default App
