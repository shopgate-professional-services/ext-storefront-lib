import { config } from './config';

let retailred;

export default () => {
  if (retailred) {
    return retailred;
  }

  retailred = window.RetailRedStorefront.create({
    apiKey: config.apiKey,
    apiStage: config.apiStage,
    unitSystem: config.unitSystem,
    useGeolocationImmediately: config.useGeolocationImmediately,
    saveCustomerData: config.saveCustomerData,
    browserHistory: config.browserHistory,
    inventory: {
      hideNumber: config.inventoryHideNumber,
      showExactUntil: config.inventoryShowExactUntil,
      showLowUntil: config.inventoryShowLowUntil,
    },
    legal: {
      terms: config.termsLink,
      privacy: config.privacyLink,
    },
    // TODO: remove
    product: {
      code: 'acai-bowl',
      name: 'Dark Blue Dress',
      options: [
        {
          code: 'code-color',
          name: 'Color',
          value: {
            code: 'code-color-red',
            name: 'Red',
          },
        },
        {
          code: 'code-size',
          name: 'Size',
          value: {
            code: 'code-size-m',
            name: 'M',
          },
        },
      ],
      quantity: 2,
      imageUrl: 'https://demo.elliselaine.com/pub/media/catalog/product/cache/5e62a3e057e3c5cc5f2bb9763ad693f7/k/l/kleid_dunkelblau_5.jpg',
      price: 34.0,
      currencyCode: 'USD',
      identifiers: {
        sku: 'abc123',
      },
    },
  });
  return retailred;
};
