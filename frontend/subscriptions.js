import { appDidStart$ } from '@shopgate/engage/core';
import { productIsReady$ } from '@shopgate/pwa-tracking/streams/product';
import { variantDidChange$ } from '@shopgate/pwa-common-commerce/product/streams';
import getRetailred from './retailRedStorefront';

export default (subscribe) => {
  subscribe(appDidStart$, ({ getState }) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://cdn.retail.red/omni/retailred-storefront-library-v2.js';
    const parent = document.getElementsByTagName('head')[0];
    parent.appendChild(script);
  });

  // TODO: set user data if already logged in
  // TODO: call updateConfig() if user did login/logout
  // TODO: disable if product is not orderable

  subscribe(productIsReady$, ({ getState }) => {

    getRetailred().updateConfig({
      product: {}, // TODO: pass data here
    });
  });

  subscribe(variantDidChange$, ({ getState, action }) => {
    const state = getState();
    const { id: productId } = action.productData;
    const props = { productId };

    getRetailred().updateConfig({
      product: {}, // TODO: pass data here
    });

  });

};

