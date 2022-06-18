import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function ContactForm() {
  return (
    <div className="form_section">
      <Row className="form_row">
        <Col sm={12} md={6} style={{padding:'3rem'}}>
          <h2>¿Deseas conocer cómo podemos apoyar tu empresa?</h2>
        </Col>
        <Col className="contact-us text-center" sm={12} md={6} style={{padding:'5rem'}}>
          <Container >
          <h3>Déja tus datos y pronto nos pondremos en contacto contigo</h3>
          <form className='form' action="https://formspree.io/f/xgedqvqk" method="POST">
            <div className="form_row">
              <div className="form_label">
                <label>
                  <input name="Nombre" placeholder="Nombre" />
                </label>
              </div>
              <div className="form_label">
                <label>
                  <input name="Apellido" placeholder="Apellido" />
                </label>
              </div>
            </div>
            <div className="form_info">
              <label style={{ display: "block" }}>
                <input
                  style={{ width: "100%" }}
                  type="email"
                  name="Email"
                  placeholder="Email"
                />
              </label>
              <label style={{ display: "block" }}>
                <input
                  style={{ width: "100%" }}
                  name="telefono"
                  placeholder="Telefono"
                />
              </label>
              <label style={{ display: "block" }}>
                <input
                  style={{ width: "100%" }}
                  name="Empresa"
                  placeholder="Empresa"
                />
              </label>
            </div>
            <div className="form_info">
              <label>
                <textarea
                  name="Mensaje"
                  placeholder="Mensaje"
                  style={{ width: "100%" }}
                ></textarea>
              </label>

              <button className="button" type="submit">
                Enviar
              </button>
            </div>
          </form>

          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default ContactForm;
