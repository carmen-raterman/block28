import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Blue from './components/Blue'
import Red from './components/Red'
import Home from './components/Home'
import './index.css'

function App() {


  return (
    <>
      <div> {console.log("Hi")} </div>

      <div id="container">
        <div id="navbar">
          <Link to="/blue" className="blue"> Blue </Link>
          <Link to="/red" className="red"> Red </Link>
          <Link to="/" className="home"> Home </Link>
        </div>
      </div>

      <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/" element={<Home />} />
          </Routes>
      </div>

    </>
  )
}

export default App
