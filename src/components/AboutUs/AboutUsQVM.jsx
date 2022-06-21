import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
function AboutUsQVM() {
  return (
    <div className="AboutUs__QVM">
        <Container className='AboutUs__main' fluid>
          <Row>
            <Col className='AboutUs__Q' sm={12} md={6}>
                
            </Col>
            <Col sm={12} md={6}>
              <Container>
                <h3 style={{ color: "#2276BD" }}>Quienes somos</h3>
                <p style={{ color: "black" }}>
                  Maquiservicios C.C. resume más de una década de crecimiento y
                  experiencias, con clientes del sector de la construcción
                  diversificando sus servicios y ampliando nuestra cobertura a
                  nivel nacional. Nacemos en el 2016 como una empresa enfocada
                  netamente en la prestación de servicios a un cliente
                  exclusivo, y con el tiempo logramos aumentar nuestra capacidad
                  operativa, permitiendo el crecimiento de la empresa en
                  compañías del sector de construcción, generando más empleos y
                  fortaleciendo nuestra presencia en el mercado. En el 2015
                  superando obstáculos, decidimos hacer un cambio de enfoque
                  empresarial, donde dimos prioridad al desarrollo de un Sistema
                  de Seguridad y Salud en el Trabajo que nos permitiera
                  destacarnos ante los clientes, aumentando su confianza en
                  nosotros; de tal manera que se convirtiera en un eje
                  fundamental que nos destaca sobre los oferentes en el mercado.
                  Venimos desarrollando un equipo de trabajo profesional y hemos
                  dado oportunidades de crecimiento a los colaboradores que
                  buscan cumplir sus sueños junto a nosotros.{" "}
                </p>
              </Container>
            </Col>
          </Row>
          <Row className='AboutUs__QVM__RowReverse'>
            <Col className="AboutUs__vision" sm={12} md={6}>
              <Container>
                <h3 style={{ color: "#2276BD" }}>Vision</h3>
                <p style={{ color: "black" }}>
                  Maquiservicios C.C. se desarrolla con cobertura de atención a
                  nivel nacional conservando sus servicios bajo estándares
                  rigorosos del SG-SST para garantizar el cuidado y conservación
                  de los equipos e instalaciones de nuestros clientes para poder
                  generar una mayor vida útil, empoderando a nuestros
                  colaboradores para su proyección y crecimiento personal y por
                  medio de ellos transferir nuestros beneficios al cliente
                  final.
                </p>
              </Container>
            </Col>
            <Col className='AboutUs__V' sm={12} md={6}></Col>
          </Row>
          <Row>
            <Col className='AboutUs__M' sm={12} md={6}></Col>
            <Col sm={12} md={6}>
              <Container>
                <h3 style={{ color: "#2276BD" }}>Mision</h3>
                <p style={{ color: "black" }}>
                  Maquiservicios C.C. suministra personal capacitado para
                  ejecutar servicios logísticos de cargue, limpieza, obras
                  civiles y manutención de maquinaria y zonas industriales,
                  mediante el diagnóstico, ejecución y acompañamientos acordes a
                  las necesidades de cada uno de nuestros clientes; quienes
                  prefieren nuestra oferta sobre otras alternativas debido a
                  nuestros estándares de calidad y el cumplimiento del SG-SST,
                  generando confianza y tranquilidad en nuestros aliados.
                </p>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
  )
}

export default AboutUsQVM