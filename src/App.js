import React, { Component } from 'react';
import Products from './Products/Products';
import './App.css';

const URL = 'https://spreadsheets.google.com/feeds/list/1Cp0owZ_71huZOBLiX57hKTvxKYEo4qZC1y_IAHV6rX4/od6/public/values?alt=json';

class App extends Component {
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

  render() {
    return (
      <div className="App">
        <a href="#">Cart</a>

        {
          this.state.isLoading ?
            "Loading Products..." : <Products products={this.state.products} />
        }
      </div>
    );
  }
}

export default App;
