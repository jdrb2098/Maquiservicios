import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function ValoresCorporativos() {
  return (
    <div className='AboutUs__valores'>
        <div className="AboutUs__goals">
          <h2 style={{ color: "#2276BD" }}>VALORES CORPORATIVOS</h2>
        </div>

        <Container>
          <Row>
            <Col className="Valores__Col text-center" sm={12} md={4}>
              <img src="src\assets\AboutUs\Compromiso.png" />
              <h4 style={{ color: "#2276BD" }}>Compromiso</h4>
              <p style={{ color: "black", padding: "0 3rem" }}>
                con la generación de oportunidades laborales a las comunidades
                primaria de la compañía.
              </p>
            </Col>
            <Col className="Valores__Col text-center" sm={12} md={4}>
              <img src="src\assets\AboutUs\Mejoramiento.png" alt="" />
              <h4 style={{ color: "#2276BD" }}>Mejoramiento</h4>
              <p style={{ color: "black", padding: "0 3rem" }}>
                continuo como pilar de la organización y de cada uno de nuestros
                colaboradores.
              </p>
            </Col>
            <Col className="Valores__Col text-center" sm={12} md={4}>
              <img src="src\assets\AboutUs\Satisfaccion.png" alt="" />
              <h4 style={{ color: "#2276BD" }}>Excelencia</h4>
              <p style={{ color: "black", padding: "0 3rem" }}>
                operativa y administrativa en cada proceso y ambiente laboral de
                desarrollo.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="Valores__Col text-center" sm={12} md={6}>
              <img src="src\assets\AboutUs\Mejoramiento-1.png" alt="" />
              <h4 style={{ color: "#2276BD" }}>Satisfacción</h4>
              <p style={{ color: "black", padding: "0px 5rem" }}>
                por cada trabajo, entrega y servicio que se presta a nuestros
                clientes externos e internos de la organización.
              </p>
            </Col>
            <Col className="Valores__Col text-center" sm={12} md={6}>
              <img src="src\assets\AboutUs\Respeto.png" alt="" />
              <h4 style={{ color: "#2276BD" }}>Respeto</h4>
              <p style={{ color: "black", padding: "0px 5rem" }}>
                por la diversidad de cada colaborador de Maquiservicios C.C. y
                nuestro entorno.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
  )
}

export default ValoresCorporativos