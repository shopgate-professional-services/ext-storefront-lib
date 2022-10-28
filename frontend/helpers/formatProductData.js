import getConfig from './getConfig';

const { config } = getConfig();

/**
 * Re-format a given product from the store.
 * @param {Object} productData The product data from the store
 * @returns {Object|null} The formatted product.
 */
export const formatProductData = (productData) => {
  if (!productData) {
    return null;
  }

  const {
    id,
    name,
    price,
    identifiers,
    featuredImageUrl,
    characteristics,
  } = productData;

  // Set which identifier is to be used for the product code, default: uid
  const productCodeIdentifierMapping = (config.productCodeIdentifierMapping in identifiers) ?
    identifiers[config.productCodeIdentifierMapping] : id;

  // TODO: options options still need to be added
  const productVariants = characteristics ?
    Object.keys(characteristics).forEach((key) => {
      productVariants.push({
        code: String(characteristics[key].id),
        name: characteristics[key].name,
        value: {
          code: String(characteristics[key].id),
          name: characteristics[key].value,
        },
      });
    }) : [];

  return {
    code: String(productCodeIdentifierMapping),
    name,
    options: productVariants,
    quantity: 1,
    imageUrl: featuredImageUrl,
    price: price.unitPrice,
    currencyCode: price.currency,
    identifiers,
  };
};
