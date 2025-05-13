import React from "react";
import "../Catagories/Catagories.css";
import { categories } from "../../Data/Data";

const CategoriesGrid = () => {
  return (
    <section>
        <div className="title">
            <h2>Our Categories</h2>
        </div>
      <div className="categories-grid">
        {categories.map((item, index) => (
          <div className={`category-item ${item.size}`} key={index}>
            <img src={item.img} alt={item.name} />
            <div className="category-overlay">
              <h3>{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesGrid;
