import getConfig from './helpers/getConfig';

const { config } = getConfig();

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
    localization: config.localization,
    legal: {
      terms: config.termsLink,
      privacy: config.privacyLink,
    },
    newsletterOptIn: config.newsletterOptIn,
    platform: "engage"
  });
  return retailred;
};
