import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import services from '../../../public/assets/json/services.json'
import ServiceCard from './ServiceCard'


function ServicesPortfolio() {
    console.log(services)
  return (
    <Container className='servicesPortfolio' fluid>
        <div className='p-5'>
            <h3 style={{color: '#8F9092'}}>Conóce nuestro</h3>
            <h2 style={{color: '#0E5590'}}>PORTAFOLIO DE SERVICIOS</h2>
        </div>
        <Row id='services'>
            {services.map(service => (
                <Col key={service.id} sm={12} md={6} lg={4}>
                    <ServiceCard service={service} />
                </Col>
            ))}
        </Row>
    </Container >
  )
}

export default ServicesPortfolio