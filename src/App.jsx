import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'
import AboutUsScreen from './screens/AboutUsScreen'
import ServicesScreen from './screens/ServicesScreen'
import GoalsScreen from './screens/GoalsScreen'

function App() {
  

  return (
    <BrowserRouter>
    <Header/>
      
      <main className="">
        <div>
          <Routes>
            {" "}
            <Route path="/" element={<HomeScreen/>} />
            <Route path="/Nosotros" element={<AboutUsScreen/>} />
            <Route path="/Servicios" element={<ServicesScreen/>} />
            <Route path='/Logros' element={<GoalsScreen/>} />
          </Routes>
        </div>
      </main>
    <Footer/> 
    </BrowserRouter>
  )
}

export default App
