import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";
import FooterLogo from '../../public/assets/LogoWhite.svg'

function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <img src={FooterLogo}/>
      </div>
      <hr />
      <div className="footer__botoom">
        <div className="footer__botoom__container">
          <LinkContainer to="/Nosotros">
            <Nav.Link>Nosotros</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Servicios">
            <Nav.Link>Servicios</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Logros">
            <Nav.Link>Nuestros Logros</Nav.Link>
          </LinkContainer>
        </div>

        <div className="footer__botoom__container text-center">
          <div className="footer__linkding">
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-whatsapp-square"></i>
            <i className="fa-brands fa-instagram-square"></i>
          </div>
          <p>
            © Logo, Inc. 2019.
            <br />
            Políticas de privacidad
            <br />
            Términos y condiciones
          </p>
        </div>

        <div className="footer__botoom__container">
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
        </div>
      </div>
    </div>
  );
}

export default Footer;
