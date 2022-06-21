import React from "react";
import Constructor from '../../public/assets/GoalsScreen/Contructor.png'
function GoalsScreen() {
  return (
    <div className="GoalsScreen">
      <img src={Constructor} alt="" />
      <div className="GoalsScreen__Text">
        <h3 style={{ color: "#8F9092" }}>Esta página está</h3>
        <h2 style={{ color: "#0E5590" }}><b>EN CONSTRUCCIÓN</b></h2>
        <p style={{ color: "black", fontSize: 'x-large' }}>
          ¡Vuelve pronto para revisar nuestro contenido!
        </p>
      </div>
    </div>
  );
}

export default GoalsScreen;
