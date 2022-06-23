import React, { useLayoutEffect, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PortfolioServices from '../components/Services/PortfolioServices'
import ContactForm from '../components/Home/ContactForm'
import ServicesCarrousel from '../components/Services/ServicesCarrousel';
import Zones from '../components/Services/Zones';





function ServicesScreen() {
    
    const location = useLocation();
    useLayoutEffect(() => {
      servicesRef.current.scrollIntoView()
    }, [location.pathname]);
    const myRef = useRef(null)
    const servicesRef = useRef(null)
    const executeScroll = () => myRef.current.scrollIntoView()
    
  return (
    <div>
      <div className='Services__Contact'>
        <h2 style={{color:'#8F9092'}}>Estamos en capacidad de desarrollar</h2>
        <h2 style={{color:'#0E5590'}}><b>PROCESOS Y SERVICIOS A TU MEDIDA</b></h2>
        <button className='mt-3' onClick={executeScroll}>Contactanos</button>
      </div>
      <div className='contact__bootomBG'>

      </div>
      <div ref={servicesRef}></div>
      <PortfolioServices location={location.state}/>
      <ServicesCarrousel/>
      <Zones/>
      <div ref={myRef}></div>
      <ContactForm />
    </div>
  )
}

export default ServicesScreen