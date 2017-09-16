// Dependencies
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// Externals
import data from '../../assets/data/data'
// Internals
import './index.css'

class Details extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: 0,
      title: "",
      description: "",
      img_large: "",
      price: "",
    }
  }

  componentDidMount(){
    const id = this.props.match.params.id
    this.setState({
      id: id,
      title: data[id - 1].title,
      description: data[id - 1].description,
      img_large: data[id - 1].img_large,
      price: data[id - 1].price,
    })
  }

  render() {
    return (
      <div className="product-detail">
        <img className="detail-image" alt={this.state.title} src={this.state.img_large} />
        <span className="description">
          {this.state.description}
        </span>
        <span className="price">Price: {this.state.price}</span>
        <Link className="back" to={`/`}>All Products</Link>
      </div>
    )
  }
}

export default Details;
