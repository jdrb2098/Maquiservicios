import React from "react";
import { Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import benefits from "../../assets/json/benefits.json";

function HomeCarousel() {
  return (
    <Carousel pause="hover" className="text-center">
      {benefits.map((benefit) => (
        <Carousel.Item key={benefit.id}>
          <Link to={`/Servicios`}>
            <Image src={benefit.image} alt={benefit.name} fluid />
            <div className="carousel__caption">
              <h4>
                {benefit.title} 
              </h4>
              <p >
                  {benefit.description}
              </p>
            </div>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HomeCarousel;
