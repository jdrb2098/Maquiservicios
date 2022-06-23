import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutUs from "../components/AboutUs/AboutUs";
import AboutUsGoals from "../components/AboutUs/AboutUsGoals";
import AboutUsQVM from "../components/AboutUs/AboutUsQVM";
import Team from "../components/AboutUs/Team";
import ValoresCorporativos from "../components/AboutUs/ValoresCorporativos";
import PDF from '../../public/assets/AboutUs/Sistema-de-SeguridadySaludenelTrabajo_Maquiservicios'

function AboutUsScreen() {
  return (
    <div>
      <AboutUs />
      <AboutUsGoals />
      <AboutUsQVM />
      <ValoresCorporativos />
      <Team />
      <div>
        <div className="AboutUs__SG">
          <h3 className="text-muted">¿Te interesa conocer nuestro</h3>
          <h2 style={{ color: "#005792" }}>Sistema de Gestión de Seguridad</h2>
          <h2 style={{ color: "#005792" }}>y Salud en el Trabajo SG-SST?</h2>
          <button className="button mt-5" type="submit">
            <a style={{color: 'white'}} download="" href={PDF} className="button">
              Descárgalo aquí<i className="ri-download-line"></i>
            </a>
          </button>
        </div>
        <div className="SG__BG"></div>
      </div>
    </div>
  );
}

export default AboutUsScreen;
