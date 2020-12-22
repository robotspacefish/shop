import React from 'react';
import './Product.css';

export default function Product({ title, price, availability, description }) {
  return (
    <div className="Product">
      <h2>{title}</h2>
      <span>${price}</span>
      <h4>Description:</h4>
      <p>{description}</p>
      {
        availability === "in_stock" ?
          <button>Add To Cart</button> :
          <span>Out of Stock</span>
      }
    </div>
  );
}