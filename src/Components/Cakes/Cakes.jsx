import React from "react";
import "../Cakes/Cakes.css";
import { cakes } from "../../Data/Data";

const Cakes = () => {
  return (
    <section className="cakes">
      <div className="container">
        <div className="cakes-heading">
          <h2>Cakes</h2>
        </div>
        <div className="cakes-container">
          {cakes?.cakeimg?.map((item, index) => (
            <div key={index} className="cake-item">
              <div className="images">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="cake-name">
                <p>{item.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="cake-button">
          <button className="btn-one"> view all</button>

        </div>
      </div>
    </section>
  );
};

export default Cakes;
