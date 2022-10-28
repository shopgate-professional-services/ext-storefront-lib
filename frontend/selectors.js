import { createSelector } from 'reselect';
import { getProduct } from '@shopgate/engage/product';
import { formatProductData } from './helpers/formatProductData';

/**
 * Gets the current product in a formatted way.
 * @param {Object} state The current state.
 * @returns {Object} The formatted selected variant.
 */
export const getProductFormated = createSelector(
  getProduct,
  formatProductData
);
