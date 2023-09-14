import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import { Blue } from './components/Blue.jsx'
import { Red } from './components/Red.jsx'

function App() {


  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link property="/blue" element={ Blue } />
          <Link property="/red" element={ Red } />
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/blue" element={ Blue } />
            <Route path="/red" element={ Red } />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
