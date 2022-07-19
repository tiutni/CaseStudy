import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Intro from './pages/Intro' 
import Browse from './pages/Browse'
import Play from './pages/Play'
import Login from './pages/Login'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Intro/>} />
      <Route path="/intro" element={<Intro/>} />
      <Route path="/browse" element={<Browse/>} />
      <Route path="/play" element={<Play/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;