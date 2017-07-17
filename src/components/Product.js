import React, {Component} from 'react'
import PropTypes from 'prop-types'

// Code Product Component Here
class Product extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h1>{this.props.producer}</h1>
        <h1>{this.props.hasWatermark}</h1>
        <h1>{this.props.color}</h1>
        <h1>{this.props.weight}</h1>
      </div>
    )
  }
}

function productWeightChecker(props, propName, componentName) {
  if (props[propName] > 300 || props[propName] < 80) {
    return new Error('Validation failed!')
  } else if (typeof props[propName] !== 'number') {
    return new Error('Validation failed again!')
  } else {
    return null
  }
  let chainedCheckRange = productWeight.bind(null, false)
  chainedCheckRange.isRequired = productWeight.bind(null, true)
  return chainedCheckRange
}

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location) {
    if (props[propName] == null) {
      var locationName = ReactPropTypeLocationNames[location];
      if (isRequired) {
        return new Error(
          ("Required " + locationName + " `" + propName + "` was not specified in ") +
          ("`" + componentName + "`.")
        );
      }
      return null;
    } else {
      return validate(props, propName, componentName, location);
    }
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}

let productWeight = createChainableTypeChecker(productWeightChecker)

Product.defaultProps= {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
  weight: productWeight
}

export default Product
