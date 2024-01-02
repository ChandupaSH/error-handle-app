import React from 'react'
import {  HashRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './scenes/HomePage'
import UserPage from './scenes/UserPage'
import WorkoutPage from './scenes/WorkoutPage'
import TodayWPage from './scenes/TodayWPage'
import QrPage from './scenes/QrPage'
import Register from './scenes/Register'
import AdminM from './scenes/AdminM'
import AdminUser from './scenes/AdminUser'



const App = () => {
  return (
      <Router>
        <Routes>
          <Route path='/' element = { <HomePage/>}/>
          <Route path='/user' element = { <UserPage/>}/>
          <Route path='/qr' element = { <QrPage/>}/>
          <Route path='/workout' element = { <WorkoutPage/>}/>
          <Route path='/todayw' element = { <TodayWPage/>}/>
          <Route path='/reg' element = { <Register/>}/>
          <Route path='/admin' element = { <AdminM/>}/>
          <Route path='/admin-user' element = { <AdminUser/>}/>
        </Routes>
      </Router> 
  )
}

export default App
