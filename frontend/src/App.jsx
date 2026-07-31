import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import Dashboard from './pages/Dashboard'
import ForgetPasswordPage from './pages/ForgetPasswordPage'

import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>} ></Route>
        <Route path='/signup' element={<SignUpPage/>} ></Route>
        <Route path='/forget' element={<ForgetPasswordPage/>} ></Route>
        <Route path='/dashboard' element={<Dashboard/>} ></Route>
      </Routes>
    </Router>

  )
}

export default App
