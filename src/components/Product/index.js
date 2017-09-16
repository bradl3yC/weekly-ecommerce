// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import truncate from 'lodash/truncate';
import { Link } from 'react-router-dom'
// Internals
import './index.css';


const Product = ({ id, title, description, img_small, price }) => (
  <div className="product">
    <Link className="title" to={`/product/details/${id}`}>{title}</Link>
    <img alt={title} src={img_small} />
    <span className="description">
      {truncate(description, { length: 45, separator: /,? +/ })}
    </span>
    <span className="price">Price: {price}</span>
  </div>
);

Product.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img_small: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Product;
