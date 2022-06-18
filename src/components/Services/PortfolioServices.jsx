import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import services from "../../assets/json/services.json";
import ServiceCard from "./ServiceCard";

function portfolioServices({ location }) {
  const [service, setService] = useState(services[0]);
  useEffect(() => {
    if (location) {
      setService(location);
      
    }
  }, []);
  const seeSummary = (id) => {
    setService(services[id - 1]);
  };

  return (
    <Container className="ServicesScreenLayout"  fluid >
      <Row className="">
        <Col>
          <Container fluid>
            <Row id="services">
              <h4 style={{color: '#8F9092'}}>Conóce nuestro</h4>
              <h2 style={{color: '#0E5590'}}>PORTAFOLIO DE SERVICIOS</h2>
              {services.map((service) => (
                <Col
                  key={service.id}
                  sm={12}
                  md={6}
                  lg={4}
                  onClick={() => seeSummary(service.id)}
                >
                  <ServiceCard service={service} />
                </Col>
              ))}
            </Row>
          </Container>
        </Col>
        <Col className="my-auto">
          <Container className="Services__infoContainer">
            <img style={{width: '460px'}} src={service.image} />
            <div className="p-5">
              <h2 style={{color: '#2276BD'}}>{service.title}</h2>
              <p style={{ color: "black" }}>{service.description}</p>
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default portfolioServices;
