// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';


class Product extends React.Component{
  render(){
    return (
      <p>name: {this.props.name}</p>,
      <p>producer: {this.props.producer}</p>,
      <p>{this.props.hasWatermark}</p>,
  
      <p>color: {this.props.color}</p>,
      <p>weight: {this.props.weight}</p>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false,
  // color: 'white', 'eggshell-white', 'salmon'
}
Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white','eggshell-white', 'salmon']).isRequired,
  weight: (props, propName) => {
    const weight = props[propName]
    if (weight === undefined){
    return new Error('the `weight` prop is required.')
    }
    if (isNaN(weight)){
      return new Error('the `weight` prop is not a number.')
    }
    const isValidWeight = weight > 80 && weight < 300

    if (!isValidWeight) {
      return new Error('The `weight` prop should range between 80 and 300.')
    }
  },
}

export default Product