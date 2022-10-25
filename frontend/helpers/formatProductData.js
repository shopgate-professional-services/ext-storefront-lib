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
    } = productData

    // Set product code, default: uid
    const productCode = (config.productCode in identifiers) ? identifiers[config.productCode] : id

    let productVariants = []

    if (characteristics) {
        Object.keys(characteristics).forEach(key => {
            productVariants.push(
            {
                code: String(characteristics[key].id),
                name: characteristics[key].name,
                value: {
                    code: String(characteristics[key].id),
                    name: characteristics[key].value
                }
            }
            );
        })
    }

    return {
        code: String(productCode),
        name: name,
        options: productVariants,
        quantity: 1,
        imageUrl: featuredImageUrl,
        price: price.unitPrice,
        currencyCode: price.currency,
        identifiers: identifiers,
    }
};
