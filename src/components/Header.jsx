import React from "react";
import { useState } from "react";
import { Button, Offcanvas, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <LinkContainer to="/">
          <Nav.Link>
          <img src="/src/assets/LogoMsNav.svg" />
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
        <Button className="menu__button" variant="primary" onClick={handleShow}>
          <i className="fa-solid fa-bars"></i>
        </Button>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <img src="/src/assets/LogoMsNav.svg" />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <LinkContainer to="/Nosotros">
            <Nav.Link>Nosotros</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Servicios">
            <Nav.Link>Servicios</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Logros">
            <Nav.Link>Nuestros Logros</Nav.Link>
          </LinkContainer>
        </Offcanvas.Body>
      </Offcanvas>
    </nav>
  );
}

export default Header;