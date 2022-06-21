import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Comp1 from '../../../public/assets/AboutUs/Component1.png'
import Comp2 from '../../../public/assets/AboutUs/Component2.png'
import Comp3 from '../../../public/assets/AboutUs/Component3.png'

function Team() {
  return (
    <Container fluid>
      <Row className="AboutUs__Diferencia">
        <Col className="AboutUs__bg" sm={12} md={6}></Col>
        <Col className="AboutUs__Diferencia__bg" sm={12} md={6}>
          <Container>
            <p style={{ fontSize: "30px" }}>Nuestro Equipo</p>
            <h2 style={{ color: "white" }}>
              <b>MARCA LA DIFERENCIA</b>
            </h2>
            <p>
              Empoderamos a los integrantes de nuestros equipos mediante
              procesos de formación y capacitación continua, enfocándonos en la
              actualización de conocimientos para el cumplimeinto de normas y
              procesos en los sectores económicos de desarrollo de nuestros
              clientes
            </p>
            <hr />
            <div className="AboutUs__flexDC">
              <Row className="AboutUs__flexDC__row">
                <Col sm={12} md={2}>
                  <img src={Comp1} alt="" />
                </Col>
                <Col sm={12} md={10}>
                  <p>
                    Cada uno de nuestros trabajadores está en la capacidad de
                    identificar oportunidades de mejora en los procesos.
                  </p>
                </Col>
              </Row>
              <Row className="AboutUs__flexDC__row">
                <Col sm={12} md={2}>
                  <img src={Comp2} alt="" />
                </Col>
                <Col sm={12} md={10}>
                  <p>
                    Las personas que forman parte de nuestro equipo de trabajo
                    son embajadores de nuestra ética y valores corporativos,
                    destacandose por desarrollar un trabajo eficaz y
                    estructurado.
                  </p>
                </Col>
              </Row>
              <Row className="AboutUs__flexDC__row">
                <Col sm={12} md={2}>
                  <img src={Comp3} alt="" />
                </Col>
                <Col sm={12} md={10}>
                  <p>
                    Le damos la oportunidad a nuestros colaboradores de
                    proyectar su crecimiento a nivel profesional para el
                    mejoramiento de su calidad de vida.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Team;
