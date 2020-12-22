import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar(props) {
  return (
    <div className="NavBar">
      <NavLink exact to="/">Products</NavLink>
      <NavLink exact to="/cart">View Cart</NavLink>
      <span>{props.totalCartItems} Items in Cart</span>
    </div>
  );
};