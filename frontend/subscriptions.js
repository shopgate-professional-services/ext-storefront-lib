import queryString from 'query-string';
import { appDidStart$, historyPush, hasSGJavaScriptBridge } from '@shopgate/engage/core';

import { variantDidChange$ } from '@shopgate/pwa-common-commerce/product/streams';
import { productIsReady$ } from '@shopgate/pwa-tracking/streams/product';
import {
  userDataReceived$,
  userDidLogout$,
  getUserData,
} from '@shopgate/engage/user';
import { getProductFormated } from './selectors';
import getRetailRed from './retailRedStorefront';

export default (subscribe) => {
  // Include storefront library
  subscribe(appDidStart$, ({ dispatch }) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://cdn.retail.red/omni/retailred-storefront-library-v2.js';
    const parent = document.getElementsByTagName('head')[0];
    parent.appendChild(script);

    if (!hasSGJavaScriptBridge()) {
      // No link hijacking when not executed within app environment
      return;
    }

    // Hijack links within the Storefront library modal and open them within the In-App-Browser.
    const rootElement = document.querySelector('body');
    rootElement.addEventListener('click', (event) => {
      if (event.target.matches('a.rr-link') && event.target.target === '_blank') {
        event.preventDefault();

        const {
          attributes: {
            href: { value: href = '' } = {},
            target: { value: target = '' } = {},
          } = {},
        } = event.target;
        // The app seems to have issues with spaces within the query. So we parse the url here
        // and re-build is later.
        const parsed = queryString.parseUrl(href);
        // Determine if url is supposed to be opened within the OS browser
        const openExternal = parsed.url.includes('google.com/maps');

        if (parsed.url.slice(-1) === '/') {
          /**
           * PWA 6 contains a bug that removes trailing slashes before they are opened. Google MAPS
           * links within the Storefront Library need a trailing slash to work. So as a workaround
           * we add an additional one to the url. Maps links will also work with two trailing
           * slashes.
           */
          parsed.url = `${parsed.url}/`;
        }

        let pathname = parsed.url;

        if (Object.keys(parsed.query).length) {
          pathname = `${pathname}?${queryString.stringify(parsed.query)}`;
        }

        dispatch(historyPush({
          pathname,
          ...target && openExternal && { state: { target } },
        }));
      }
    }, true);
  });

  // Update user data with logged in user
  subscribe(userDataReceived$, ({ getState }) => {
    const state = getState();
    const userData = getUserData(state);

    const user = userData ? {
      code: null,
      firstName: userData.firstName,
      lastName: userData.lastName,
      phone: userData.phone,
      emailAddress: userData.mail,
    } : {};

    getRetailRed().updateConfig({
      customer: user,
    });
  });

  // Unset user after logout
  subscribe(userDidLogout$, () => {
    const user = {
      code: null,
      firstName: '',
      lastName: '',
      phone: '',
      emailAddress: '',
    };
    getRetailRed().updateConfig({
      customer: user,
    });
  });

  // Update product data
  subscribe(productIsReady$, ({ getState, action }) => {
    const state = getState();
    const {
      id: productId,
    } = action.productData;

    const props = { productId };

    const formatedProduct = getProductFormated(state, props);

    getRetailRed().updateConfig({
      product: formatedProduct,
    });
  });

  // Update product data after variant change
  subscribe(variantDidChange$, ({ getState, action }) => {
    const state = getState();
    const {
      id: productId,
    } = action.productData;
    const props = { productId };

    const formatedProduct = getProductFormated(state, props);

    getRetailRed().updateConfig({
      product: formatedProduct,
    });
  });
};
