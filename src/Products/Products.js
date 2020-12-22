import React from 'react';
import Product from '../Product/Product';
import './Products.css';

export default function Products(props) {
  const { products, addToCart } = props;

  const renderProducts = () => (
    products.map(p => (
      <Product key={p.id} product={p} addToCart={addToCart} />
    ))
  );

  return (
    <div className="Products">
      <h1>Products</h1>
      <div className="Products__content">
        {renderProducts()}
      </div>
    </div>
  );
}