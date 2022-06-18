import React from "react";
import services from "../../assets/json/services.json";
import { Carousel, Image } from "react-bootstrap";

function ServicesCarrousel() {
  return (
    <Carousel pause="hover" className="ServicesCarousel text-center">
      {services.map((service) => (
        <Carousel.Item key={service.id}>
          <Image src={service.image} alt={service.title} fluid />
          <div className="carousel__caption">
            <img src={service.icon} style={{height: '100px', padding: '0px'}} alt={service.title} />
            <h4 style={{color: '#2276BD'}}>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ServicesCarrousel;
