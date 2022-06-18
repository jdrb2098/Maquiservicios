import React from "react";
import { Col, Row } from "react-bootstrap";

function TrustCompanies() {
  return (
    <div className="TrustCompanies">
      <div className="TrustCompanies__title text-center">
        <h4>
          Estas son las empresas que confian en{" "}
          <b>nuestra etica y compromiso</b>
        </h4>
      </div>
      <Row className="trustCompanies__imgs">
        <Col className="TrustCompanies__img__div" sm={12} md={6}  xl={4}>
          <img src="/src/assets/trust_companies/Cemex.png" />
        </Col>
        <Col className="TrustCompanies__img__div" sm={12} md={6}  xl={4}>
          <img src="/src/assets/trust_companies/LogoCemTequendama.png" />
        </Col>
        <Col className="TrustCompanies__img__div" sm={12} md={6}  xl={4}>
          <img src="/src/assets/trust_companies/concremack.png" />
        </Col>
        <Col className="TrustCompanies__img__div" sm={12} md={6}  xl={4}>
          <img src="/src/assets/trust_companies/argos.png" />
        </Col>

        

        <Col className="TrustCompanies__img__div" sm={12} md={6}  xl={4}>
          <img src="/src/assets/trust_companies/concremovil.png" />
        </Col>
        <Col className="TrustCompanies__img__div" sm={12} md={6}  xl={4}>
          <img src="/src/assets/trust_companies/Holcim.png" />
        </Col>
        
      </Row>
    </div>
  );
}

export default TrustCompanies;
