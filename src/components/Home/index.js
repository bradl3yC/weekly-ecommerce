// Dependencies
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// Externals
import Products from '../Products';
import products from '../../assets/data/data.js'
// Internals
import './index.css';


class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.setState({products})
  }

  render() {
    return (
      <div className="home">
        <div className="landing-background">
          <div className="nav">
            <h1 className="title">Brad's Beans</h1>
            <NavLink
              activeClassName="selected"
              className="nav-link"
              to="/about"
            >
              About his beans...
            </NavLink>
          </div>
        </div>
        <Products
          products={this.state.products}
        />
      </div>
    );
  }
}

export default Home;
