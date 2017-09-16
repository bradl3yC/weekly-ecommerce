import React, { Component } from 'react'
import data from '../../assets/data/data'

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
    console.log(data[id - 1])
    this.setState({
      id: id,
      title: data[id - 1].title,
      description: data[id - 1].description,
      img_large: data[id - 1].img_large,
      price: data[id - 1].price,
    })
    console.log(id)
    console.log(this.state)
  }

  render() {
    return (
      <div className="product">
        <img alt={this.state.title} src={this.state.img_large} />
        <span className="description">
          {this.state.description}
        </span>
        <span className="price">Price: {this.state.price}</span>
      </div>
    )
  }
}

export default Details;
