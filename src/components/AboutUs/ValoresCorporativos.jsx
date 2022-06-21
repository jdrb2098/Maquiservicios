import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Compromiso from '../../../public/assets/AboutUs/Compromiso.png'
import Mejoramiento from '../../../public/assets/AboutUs/Mejoramiento.png'
import Satisfaccion from '../../../public/assets/AboutUs/Satisfaccion.png'
import Exelencia from '../../../public/assets/AboutUs/Mejoramiento-1.png'
import Respeto from '../../../public/assets/AboutUs/Respeto.png'

function ValoresCorporativos() {
  return (
    <div className='AboutUs__valores'>
        <div className="AboutUs__goals">
          <h2 style={{ color: "#2276BD" }}>VALORES CORPORATIVOS</h2>
        </div>

        <Container>
          <Row>
            <Col className="Valores__Col text-center" sm={12} md={4}>
              <img src={Compromiso} />
              <h4 style={{ color: "#2276BD" }}>Compromiso</h4>
              <p style={{ color: "black", padding: "0 3rem" }}>
                con la generación de oportunidades laborales a las comunidades
                primaria de la compañía.
              </p>
            </Col>
            <Col className="Valores__Col text-center" sm={12} md={4}>
              <img src={Mejoramiento} alt="" />
              <h4 style={{ color: "#2276BD" }}>Mejoramiento</h4>
              <p style={{ color: "black", padding: "0 3rem" }}>
                continuo como pilar de la organización y de cada uno de nuestros
                colaboradores.
              </p>
            </Col>
            <Col className="Valores__Col text-center" sm={12} md={4}>
              <img src={Satisfaccion} alt="" />
              <h4 style={{ color: "#2276BD" }}>Excelencia</h4>
              <p style={{ color: "black", padding: "0 3rem" }}>
                operativa y administrativa en cada proceso y ambiente laboral de
                desarrollo.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="Valores__Col text-center" sm={12} md={6}>
              <img src={Exelencia} alt="" />
              <h4 style={{ color: "#2276BD" }}>Satisfacción</h4>
              <p style={{ color: "black", padding: "0px 5rem" }}>
                por cada trabajo, entrega y servicio que se presta a nuestros
                clientes externos e internos de la organización.
              </p>
            </Col>
            <Col className="Valores__Col text-center" sm={12} md={6}>
              <img src={Respeto} alt="" />
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