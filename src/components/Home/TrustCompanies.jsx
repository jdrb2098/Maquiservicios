import React from "react";
import { Col, Row } from "react-bootstrap";
import Cemex from "../../../public/assets/trust_companies/Cemex.png";
import Tequendama from "../../../public/assets/trust_companies/LogoCemTequendama.png";
import Concremack from "../../../public/assets/trust_companies/concremack.png";
import Argos from "../../../public/assets/trust_companies/argos.png";
import Concremovil from "../../../public/assets/trust_companies/concremovil.png";
import Holcim from "../../../public/assets/trust_companies/Holcim.png";

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
        <Col className="TrustCompanies__img__div" sm={12} md={4} >
          <img src={Cemex} />
        </Col>
        <Col className="TrustCompanies__img__div" sm={12} md={4} >
          <img src={Tequendama} />
        </Col>
        <Col className="TrustCompanies__img__div" sm={12} md={4} >
          <img src={Concremack} />
        </Col>
      </Row>
      <Row className="trustCompanies__imgs">
        <Col className="TrustCompanies__img__div" sm={12} md={4} >
          <img src={Argos} />
        </Col>
        <Col className="TrustCompanies__img__div" sm={12} md={4} >
          <img src={Concremovil} />
        </Col>
        <Col className="TrustCompanies__img__div" sm={12} md={4} >
          <img src={Holcim} />
        </Col>
      </Row>
    </div>
  );
}

export default TrustCompanies;
