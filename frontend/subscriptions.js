import { css } from 'glamor';
import { appDidStart$, logger, routeDidEnter$ } from '@shopgate/engage/core';
import { userDataReceived$, userDidLogout$ } from '@shopgate/engage/user';
import { makeGetRoutePattern } from '@shopgate/pwa-common/selectors/router';
import UIEvents from '@shopgate/pwa-core/emitters/ui';
import { SHEET_EVENTS } from '@shopgate/pwa-ui-shared/Sheet';
import { sdkUrl, pagesWithoutWidget } from './config';
import { getUserData } from './selectors';

export default (subscribe) => {
  subscribe(appDidStart$, ({ getState }) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://cdn.retail.red/omni/retailred-storefront-library-v2.js';
    const parent = document.getElementsByTagName('head')[0];
    parent.appendChild(script);
  });
};

