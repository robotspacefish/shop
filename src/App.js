import React, { Component } from 'react';
import Products from './Products/Products';
import Cart from './Cart/Cart';
import NavBar from './NavBar/NavBar';
import { Switch, Route } from 'react-router-dom';
import './App.css';

const URL = 'https://spreadsheets.google.com/feeds/list/1Cp0owZ_71huZOBLiX57hKTvxKYEo4qZC1y_IAHV6rX4/od6/public/values?alt=json';

class App extends Component {
  state = {
    products: [],
    cart: [],
    cartTotal: 0,
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
        id: i /** set id to index value in case I needed one */
      }
    ))

    this.setState(() => ({ products, isLoading: false }));
  }

  componentDidMount() {
    console.log('fetching')
    this.fetchProducts();

  }

  /**
   * create and store cart object using necessary product info
   * 'id' is set to Math.random() because it quick/easy for this assignment
   * 'qty' is unused elsewhere - I intended to make it so you can add/remove qty of a
   * product if time allowed
   */
  addToCart = (item) => {
    const cartItem = {
      title: item.title,
      price: item.price,
      qty: 1,
      id: Math.random()
    };

    this.setState(prevState => ({ cart: [...prevState.cart, cartItem] }), this.calculateTotal);
  }

  /** filter out item to remove by the item's id */
  removeFromCart = (itemId) => {
    const newCart = this.state.cart.filter(p => (p.id !== itemId));

    this.setState(() => ({ cart: newCart }), this.calculateTotal);
  }

  calculateTotal = () => {
    const newTotal = this.state.cart.reduce((accumulator, currentValue) => {
      return accumulator + parseInt(currentValue.price);
    }, 0);

    this.setState({ cartTotal: newTotal });
  }

  // TODO if time allows
  // isItemInCart(itemId) {
  //   return this.state.cart.find(item => item.id === itemId)
  // }

  renderProducts() {
    return (
      <Products products={this.state.products} addToCart={this.addToCart} />
    );
  }

  render() {
    const totalCartItems = this.state.cart.length;

    return (
      <div className="App">
        <NavBar totalCartItems={totalCartItems} />

        <Switch>
          <Route exact path="/" render={() => (
            this.state.isLoading ? "Loading..." : this.renderProducts()
          )} />

          <Route exact path="/cart" render={() => (
            <Cart cart={this.state.cart} cartTotal={this.state.cartTotal} removeFromCart={this.removeFromCart} />
          )} />
        </Switch>
      </div>
    );
  }
}

export default App;
