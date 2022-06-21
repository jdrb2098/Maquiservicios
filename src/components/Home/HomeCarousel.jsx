import React from "react";
import { Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import benefits from "../../../public/assets/json/benefits.json";

function HomeCarousel() {
  return (
    <div className="HomeCarousel">
      <div className="HomeCarousel__text" >
        <h2  style={{ color: "white" }}>
          Trabajamos por el bieniestar <b>DE TU EMPRESA</b>{" "}
        </h2>
        <p style={{ fontSize: "x-large", color: "white"  }}>
          Estos son todos los beneficios que obtienes al aquirir nuestros
          servicios
        </p>
      </div>
      <Carousel pause="hover" className=" text-center">
        {benefits.map((benefit) => (
          <Carousel.Item key={benefit.id}>
            <Link to={`/Servicios`}>
              <Image
                className="homeCarosuelImg"
                src={benefit.image}
                alt={benefit.name}
                fluid
              />
              <div className="carousel__caption">
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
