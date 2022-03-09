import React, { useEffect } from 'react';
import { css } from 'glamor';

const shareButton = css({
  minWidth: 44,
  height: 44,
  marginRight: 15,
}).toString();

const rippleButton = css({
  fontSize: '29px !important',
}).toString();

const Pdp = (props) => {
  useEffect(() => {
    var retailred = window.RetailRedStorefront.create({
      apiKey: "8v4SLSyxR7xq0BSkbOSscO1y",
      apiStage: 'staging',
      unitSystem: 'metric',
      product: {
        code: 'acai-bowl',
        name: 'Dark Blue Dress',
        options: [
          {
            code: 'code-color',
            name: 'Color',
            value: {
              code: 'code-color-red',
              name: 'Red'
            }
          },
          {
            code: 'code-size',
            name: 'Size',
            value: {
              code: 'code-size-m',
              name: 'M'
            }
          }
        ],
        quantity: 2,
        imageUrl: 'https://demo.elliselaine.com/pub/media/catalog/product/cache/5e62a3e057e3c5cc5f2bb9763ad693f7/k/l/kleid_dunkelblau_5.jpg',
        price: 34.0,
        currencyCode: 'USD',
        identifiers: {
          sku: 'abc123'
        }
      },
    });
    retailred.renderReserveButton('#rr-dropin');
  }, []);

  return (
    <div id='rr-dropin'></div>
  );
};

export default Pdp;
