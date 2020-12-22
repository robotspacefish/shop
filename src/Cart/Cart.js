import React from 'react';
import CartItem from '../CartItem/CartItem';

export default function Cart(props) {
  const renderCart = () => {
    return props.cart.map(p => (
      <CartItem key={p.id} product={p} removeFromCart={props.removeFromCart} />
    ))
  };

  return (
    <div className="cart">
      <h1>Cart</h1>
      <h4>Total: <span>${props.cartTotal}</span></h4>

      <hr />

      <div className="Cart__content">
        {
          props.cart.length === 0 ?
            <h3>Your Cart is Empty!</h3> : renderCart()
        }
      </div>
    </div>
  );
}