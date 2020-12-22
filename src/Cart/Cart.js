import React from 'react';
import CartItem from '../CartItem/CartItem';

export default function Cart(props) {
  return (
    <div className="cart">
      <h1>Cart</h1>
      <div className="Cart__content">
        {
          props.cart.map(p => (
            <CartItem key={p.id} product={p} removeFromCart={props.removeFromCart} />
          ))
        }
      </div>

      <hr />
      <h4>Total: <span>${props.cartTotal}</span></h4>
    </div>
  );
}