import React from 'react'
import { Col, Row } from 'react-bootstrap'

function HomeIntro({executeScroll}) {
  return (
    <Row className='homeIntro'>
      
        <Col className='homeIntro__container'>
          <Col lg={6}>
            <h1 className='text-white'><span className='text-white'><b>Somos el aliado clave</b></span> para todos los servicios de operacion civil y logistica de tu empresa</h1>
            <button onClick={executeScroll} className='btn-info contact__btn'>Contactanos</button>
          </Col>
        </Col>
        
    </Row>
  )
}

export default HomeIntro