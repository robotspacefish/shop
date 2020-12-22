import React, { Component } from 'react';

export default class Products extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    // TODO fetch products
  }

  render() {
    return (
      <div className="Products">
        <h1>Products</h1>
      </div>
    );
  }
}