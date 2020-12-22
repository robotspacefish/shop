import React from 'react';
import './Product.css';

export default function Product(props) {
  const { title, price, availability, description } = props.product;
  const { addToCart } = props;

  return (
    <div className="Product">
      <h2>{title}</h2>
      <div className="Product__info">
        <span>${price}</span>
        <h4>Description:</h4>
        <p>{description}</p>
      </div>
      {
        availability === "in_stock" ?
          <button onClick={() => addToCart(props.product)}>Add To Cart</button> :
          <span className="out-of-stock">Out of Stock</span>
      }
    </div>
  );
}