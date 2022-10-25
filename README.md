# storefront-lib

Adds the Storefront library to the shopping app.

`https://cdn.retail.red/omni/retailred-storefront-library-v2.js`

## Features
- Different templates can be rendered on the PDP: `reserveButton`, `liveInventory`(`modal` or `list`)
- The customer data of a logged in user are prefilled

## Configuration

- `apiKey (string)`: Storefront API Key
- `apiStage (string)`: Use `staging` to use our staging environment when testing. Default: `production`
- `useGeolocationImmediately (boolean)`: If enabled, whenever the user opens the store list the browsers geolocation will be requested immediately instead of only after pressing the locate me button.
- `saveCustomerData (string)`: Controls how user data is persisted within the localStorage. Can be one of `off` (data will not be saved), on (data will be saved in any case), `checkbox` (users can decide via a checkbox on the reservation page). The label of the checkbox can be changed via the localization configuration by changing the value of `localization.[lang]. saveCustomerData`. Default: `on`
- `browserHistory (boolean)` : If enabled the browsers history will be used within the reservation modal allowing the users to navigate with the native controls. Can be disabled when your store is already using the browsers history internally and the modals history conflicts with it. Default: `true`
- `unitSystem (string)`: Either `metric` or `imperial`. Default: `metric`
- `localization (Object)`:
  - `localization.localeCode (string)`: Overrides the users locale which will affect UI language.
  - `localization.countries (Array)`: Set the available countries for the store list search. Default: `['de']`
  - `localization.[lang].[key]`: Add or overrides a translation key. Default: `null`
- `inventory (Object)`:
  - `inventory.hideNumber (boolean)`: Hides the stock number and therefore display only if the product is available or not. Default: `false`
  - `inventory.showExactUntil (integer)`: If inventory is higher than the given number the inventory will be displayed as `X+ Available`.
  - `inventory.showLowUntil (integer)`: If inventory is lower than the given number the inventory will be displayed in the `state-warning color`.
- `productCode (string)`: Product code mapping. The following codes can be specified: `sku`, `upc`, `ean` or `isbn`. Default: `""`, `uid` will be used 
- `termsLink (string)`: Add an url to the terms and condition page, also enforces the user to accept them before placing an reservation.
- `privacyLink (string)`: Add an url to the privacy page, also enforces the user to accept them before placing an reservation.
- `renderLiveInventory (boolean)`: Renders the liveInventory template (which is by default a block that displays the products inventory directly in the PDP and lets the user start the reservation flow). Default: `false`
- `renderLiveInventoryMode (string)`: When set to `modal` (default behavior) the user can choose a store using the retail.red store list modal. This is recommended if you have many stores in different locations. When set to `list` the user can choose a store using simple dropdown without the overhead of going through the store list modal. This is recommended if you have less than 10 locations available.
- `newsletterOptIn (string)`: Add a checkbox to the reservation page, which allows customers to opt-in to a newsletter. Use `enabled` to activate the checkbox. Use `enabledAndPreselected` to activate the checkbox in a preselected state. Default: `disabled`

## Example configuration

```
{
  "config": {
    "apiKey": "abcdefghijklmnopqrstu123",
    "apiStage": "production",
    "useGeolocationImmediately": true,
    "saveCustomerData": "on",
    "browserHistory": true,
    "unitSystem": "metric",
    "localization": {
      "localeCode": "en",
      "de": {
        "reserve.submit": "Reserviere JETZT",
        "reserveButton.title": "In der Filiale reservieren"
      },
      "en": {
        "reserve.submit": "Reserve Now",
        "reserveButton.title": "Reserve in Store"
      }
    },
    "inventory": {
      "hideNumber": false,
      "showExactUntil": null,
      "showLowUntil": 5
    },
    "productCode": "sku",
    "termsLink": "",
    "privacyLink": "",
    "renderLiveInventory": true,
    "renderLiveInventoryMode": "list",
    "newsletterOptIn": "disabled"
  }
}
```
