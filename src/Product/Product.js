import React from 'react';

export default function Product({ title, price, availability, description }) {
  return (
    <div className="Product">
      <h2>{title}</h2>
      <span>{price}</span>
      <h4>Description:</h4>
      <p>{description}</p>
    </div>
  );
}