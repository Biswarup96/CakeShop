import React, { useEffect } from "react";
import "../OurProducts/OurProducts.css";
import { product_end } from "../../ApiUrl/Apiurl";
import axiosInstances from "../../ApiUrl/AxiosInstance";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { prod } from "../../Redux/ProductSlice";
import { addToCart } from "../../Redux/CartSlice"; // Fixed function name

const OurProducts = () => {
  const { items: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(prod());
    }
  }, [status, dispatch]); // Added 'dispatch' dependency

  if (status === "loading") {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading delicious treats...</p>
      </div>
    );
  }

  if (status === "failed")
    return (
      <div className="error-state">
        <p>Failed to load products. Please try again later.</p>
      </div>
    );

  if (!products || products.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">😞</div>
        <h2>No treats available right now</h2>
        <p>Check back later for fresh baked goods!</p>
      </div>
    );
  }

  return (
    <div className="products-container">
      <div className="div-title">
        <h1 className="section-title">
          <span className="title-decorative">Our Sweet</span>
          <span className="title-main">Selection</span>
        </h1>
      </div>

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              {product.isVegetarian && <div className="veg-tag">100% Veg.</div>}
              <img
                src={product.img}
                alt={product.title}
                className="product-image"
                onError={(e) => {
                  e.target.src = "/images/fallback-image.jpg"; // Ensure correct fallback
                  e.target.onerror = null;
                }}
              />
            </div>

            <div className="product-details">
              <h2 className="product-title">{product.title}</h2>

              <div className="price-weight-container">
                <span className="product-price">
                  ₹{product.price?.toFixed(2)}
                </span>
                <span className="product-weight">{product.weight}</span>
              </div>

              <button
                onClick={() => dispatch(addToCart(product))} // Fixed function name
                className="add-to-cart-btn"
                aria-label={`Add ${product.title} to cart`}
              >
                <span className="icon-wrapper">
                  <ShoppingCartIcon className="cart-icon" />
                </span>
                <span className="btn-text">Add to Cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
