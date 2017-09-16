// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
// Externals
import Product from '../Product';
// Internals
import './index.css';


const Products = ({ products }) => {
  return (
    <div className="products">
      {map(products, ({ id, title, description, img_small, price }) => (
        <Product key={id}
          id={id}
          title={title}
          description={description}
          img_small={img_small}
          price={price}
        />
      ))}
    </div>
  );
};

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img_small: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  })).isRequired,
};

export default Products;
