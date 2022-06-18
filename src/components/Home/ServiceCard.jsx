import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useService from "../../hooks/useService";
import ServicesScreen from "../../screens/ServicesScreen";

function ServiceCard({ service }) {
  const [serviceId, setServiceId] = useState({});
  const navigate = useNavigate();
  const useService = () => {
    setServiceId(service);
    
    navigate('/Servicios', { state:service });
    
  };
  
  
  return (
    <Card
      className=" my-3 p-3 rounded"
      style={{ height: "90%", border: "0px", boxShadow:'0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)'}}
    >
      <div className="services__img"><img src={service.icon} /></div>

      <Card.Body>
        <Card.Title as="div">
          <strong>{service.title}</strong>
        </Card.Title>

        <Card.Text as="span" className="text-center">
          {service.description.split(" ").slice(0, 9).join(" ") + "..."}
        </Card.Text>
        <div>
          <Card.Title as="div">
            <Button  className="HomeServiceButton" onClick={useService}>Leer mas</Button>
          </Card.Title>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ServiceCard;
