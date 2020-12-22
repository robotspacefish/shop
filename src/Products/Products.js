import React, { Component } from 'react';
import Product from '../Product/Product';

const URL = 'https://spreadsheets.google.com/feeds/list/1Cp0owZ_71huZOBLiX57hKTvxKYEo4qZC1y_IAHV6rX4/od6/public/values?alt=json';

export default class Products extends Component {
  state = {
    products: [],
    isLoading: true
  };

  fetchProducts() {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        this.setupProducts(data.feed.entry);
      })
      .catch(e => console.log(e))
  }

  setupProducts(data) {
    const products = data.map((p, i) => (
      {
        title: p.title.$t,
        price: p.gsx$priceincents.$t,
        availability: p.gsx$availability.$t,
        description: p.gsx$description.$t,
        id: i
      }
    ))

    this.setState(() => ({ products, isLoading: false }));
  }

  componentDidMount() {
    console.log('fetching')
    this.fetchProducts();

  }

  renderProducts() {
    return this.state.products.map(p => (
      <Product key={p.id} {...p} />
    ))
  }

  render() {
    console.log('render')
    console.log(this.state.products)
    return (
      <div className="Products">
        <h1>Products</h1>
        {this.state.isLoading ? "Loading Products..." : this.renderProducts()}
      </div>
    );
  }
}