import React from "react";
import { useState } from "react";
import { Button, Offcanvas, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import Headerlogo from "../../public/assets/LogoMsNav.svg";

function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <LinkContainer to="/">
          <Nav.Link>
            <img src={Headerlogo} />
          </Nav.Link>
        </LinkContainer>

        <div className="navbar__links">
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
        <Button className="menu__button" style={{backgroundColor: '#2276BD'}} onClick={handleShow}>
          <i className="fa-solid fa-bars"></i>
        </Button>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <LinkContainer to="/">
            <img src={Headerlogo} />
          </LinkContainer>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <LinkContainer onClick={handleClose} to="/Nosotros">
            <Nav.Link>Nosotros</Nav.Link>
          </LinkContainer>
          <LinkContainer onClick={handleClose} to="/Servicios">
            <Nav.Link>Servicios</Nav.Link>
          </LinkContainer>
          <LinkContainer onClick={handleClose} to="/Logros">
            <Nav.Link>Nuestros Logros</Nav.Link>
          </LinkContainer>
        </Offcanvas.Body>
      </Offcanvas>
    </nav>
  );
}

export default Header;
