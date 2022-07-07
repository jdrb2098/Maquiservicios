import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Col, Container, Nav, Row } from "react-bootstrap";
import FooterLogo from "../../public/assets/LogoWhite.svg";
import condiciones from "../../public/assets/AboutUs/TerminosCondiciones.pdf"

function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <img src={FooterLogo} />
      </div>
      <hr />
      <Container className="footer__botoom" fluid>
        <Row>
          <Col md={4} className="footer__botoom__container phoneDisplayNone">
            <LinkContainer to="/Nosotros">
              <Nav.Link>Nosotros</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Servicios">
              <Nav.Link>Servicios</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Logros">
              <Nav.Link>Nuestros Logros</Nav.Link>
            </LinkContainer>
          </Col>

          <Col sm={12} md={4} className="footer__botoom__container text-center">
            <div className="footer__linkding">
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-whatsapp-square"></i>
              <i className="fa-brands fa-instagram-square"></i>
            </div>
            <a
              style={{ color: "white" }}
              download=""
              href={condiciones}
              className="Condiciones-pdf"
            >
              <p>
                © Logo, Inc. 2019.
                <br />
                Políticas de privacidad
                <br />
                Términos y condiciones
              </p>
            </a>
          </Col>

          <Col sm={12} md={4} className="footer__botoom__container3">
            <div className="footer__info">
              <i className="fa-solid fa-location-dot"></i>
              <p>Sede principal: Bogotá</p>
            </div>

            <div className="footer__info">
              <i className="fa-solid fa-phone"></i>
              <p>3212546488</p>
            </div>

            <div className="footer__info">
              <i className="fa-solid fa-envelope"></i>
              <p>contacto@maquiservicioscc.com</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
