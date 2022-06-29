import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import benefits from "../../../public/assets/json/benefits.json"
import BenefitCard from "./BenefitCard";

function Benefits() {
  const [benefitsInfo, setBenefitsInfo] = useState(benefits[0])
  const seeSummary = (id) => {
    setBenefitsInfo(benefits[id-1])
  }
  
  
  return (
    <div className="benefits">
      <Row className="benefits__row">
        <Col className="benefit__info">
          <img src={benefitsInfo.image} />
          <div className="benefit__info__content">
          <h3>{benefitsInfo.title}</h3>
          <p>{benefitsInfo.description}</p>
          </div>
          
        </Col>
        <Col>
          <h2 className="text-center" style={{color: 'white'}}>
            Trabajamos por el bieniestar <b>DE TU EMPRESA</b>{" "}
          </h2>
          <p style={{fontSize: 'x-large'}}>
            Estos son todos los beneficios que obtienes al aquirir nuestros
            servicios
          </p>
          <Row id="benefits" >
            {benefits.map((benefit) => (
              <Col key={benefit.id} sm={12} md={6} lg={4} onMouseOver={() => seeSummary(benefit.id)}>
                <BenefitCard benefit={benefit} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Benefits;
