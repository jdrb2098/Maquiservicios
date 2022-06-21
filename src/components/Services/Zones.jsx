import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Frame from '../../../public/assets/Portfolio_services/Frame.png'

function Zones() {
  return (
    <Container className="my-5">
      <Row>
        <Col sm={12} md={6}>
          <img
            style={{ maxWidth: "100%" }}
            src={Frame}
            alt=""
          />
        </Col>
        <Col style={{alignSelf: 'center'}} sm={12} md={6}>
          <Container>
            <h2 style={{ color: "#0E5590" }}> ZONAS DE TRABAJO</h2>
            <p style={{ color: "black" }}>
              La presencia de nuestros servicios y operaciones se expande cada
              vez más por Colombia.
            </p>
            <p style={{ color: "black" }}>
              <b>¡Llegamos a donde nos necesites!</b>
            </p>

            <div className="Zones">
              <div className="zones__colorblock__container">
                <div
                  className="colorblock"
                  style={{ backgroundColor: "#D5EFFB" }}
                ></div>
                <p style={{ color: "black" }}>Zona Centro: Bogotá, Cundinamarca, Meta, Boyacá.</p>
              </div>
              <div className="zones__colorblock__container">
                <div
                  className="colorblock"
                  style={{ backgroundColor: "#BDE7FA" }}
                ></div>
                <p style={{ color: "black" }}>Zona Sur Oriente: Tolima, Huila.</p>
              </div>
              <div className="zones__colorblock__container">
                <div
                  className="colorblock"
                  style={{ backgroundColor: "#86B8DF" }}
                ></div>
                <p style={{ color: "black" }}>Zona Oriente: Norte de Santander, Santander.</p>
              </div>
              <div className="zones__colorblock__container">
                <div
                  className="colorblock"
                  style={{ backgroundColor: "#5495CC" }}
                ></div>
                <p style={{ color: "black" }}>Zona Occidente: Valle del Cauca, Risaralda, Quindío.</p>
              </div>
              <div className="zones__colorblock__container">
                <div
                  className="colorblock"
                  style={{ backgroundColor: "#3A7DAB" }}
                ></div>
                <p style={{ color: "black" }}>Zona Noroccidente: Antioquia.</p>
              </div>
              <div className="zones__colorblock__container">
                <div
                  className="colorblock"
                  style={{ backgroundColor: "#A8A9AB" }}
                ></div>
                <p style={{ color: "black" }}>Zona Norte: Bolívar, Magdalena, Atlántico.</p>
              </div>
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Zones;
