import React from 'react';
import './Product.css';

export default function Product(props) {
  const { title, price, availability, description, id } = props.product;
  const { addToCart } = props;

  return (
    <div className="Product">
      <h2>{title}</h2>
      <span>${price}</span>
      <h4>Description:</h4>
      <p>{description}</p>
      {
        availability === "in_stock" ?
          <button onClick={() => addToCart(props.product)}>Add To Cart</button> :
          <span>Out of Stock</span>
      }
    </div>
  );
}