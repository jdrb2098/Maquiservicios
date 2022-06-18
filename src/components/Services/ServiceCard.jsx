import React from "react";
import { Card } from "react-bootstrap";

function ServiceCard({service}) {
  return (
    <Card
      className=" ServicesCard my-3 p-3 rounded text-center"
      style={{ height: "85%", border: "0px", boxShadow:'0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)'}}
    > 
      <Card.Img style={{objectFit: 'contain', width: '82%'}} src={service.icon} />

      <Card.Title as="div">
        <strong style={{color: '#2276BD'}}>{service.title}</strong>
      </Card.Title>
    </Card>
  );
}

export default ServiceCard;
