import React from 'react';
import './CartItem.css';

export default function CartItem(props) {
  const { title, price } = props.product;
  const { removeFromCart } = props;

  return (
    <div className="CartItem">
      <button onClick={() => removeFromCart(props.product.id)}>Remove</button>
      <p>{title}</p>
      <span>${price}</span>
    </div>
  );
}