import React from 'react';

export default function CartItem(props) {
  const { title, price } = props.product;
  const { removeFromCart } = props;

  return (
    <div className="CartItem">
      <button onClick={() => removeFromCart(props.product)}>Remove</button>
      <p>{title} - <span>${price}</span></p>
    </div>
  );
}