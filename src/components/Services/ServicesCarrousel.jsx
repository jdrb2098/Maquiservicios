import React from "react";
import services from "../../../public/assets/json/services.json";
import { Carousel, Image } from "react-bootstrap";

function ServicesCarrousel() {
  return (
    <div className="HomeCarousel" style={{backgroundColor: 'white'}}>
      <div className="HomeCarousel__text"  >
        <h3 className="text_muted">Conóce nuestro</h3>
        <h2 style={{color: "#2276BD"}}>portafolio de servicios</h2>
      </div>
      <Carousel pause="hover" className="ServicesCarousel text-center">
        {services.map((service) => (
          <Carousel.Item key={service.id}>
            <Image className="homeCarosuelImg" src={service.image} alt={service.title} fluid />
            <div className="carousel__caption">
              <img
                src={service.icon}
                style={{ height: "100px", padding: "0px" }}
                alt={service.title}
              />
              <h4 style={{ color: "#2276BD" }}>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ServicesCarrousel;
