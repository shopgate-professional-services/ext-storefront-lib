import { connect } from 'react-redux';
import {
  isProductOrderable,
  getProductVariants,
} from '@shopgate/engage/product';

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @param {Object} props Component properties.
 * @return {Object} The extended component props.
 */
const mapStateToProps = (state, props) => {
  const variants = getProductVariants(state, props);
  return {
    variants: variants || {},
    isOrderable: isProductOrderable(state, props),
  };
};

export default connect(mapStateToProps);
