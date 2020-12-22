import React, { Component } from 'react';

const URL = 'https://spreadsheets.google.com/feeds/list/1Cp0owZ_71huZOBLiX57hKTvxKYEo4qZC1y_IAHV6rX4/od6/public/values?alt=json';

export default class Products extends Component {
  state = {
    products: []
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

    this.setState({ products })
  }

  componentDidMount() {
    this.fetchProducts();
  }

  render() {
    return (
      <div className="Products">
        <h1>Products</h1>
      </div>
    );
  }
}