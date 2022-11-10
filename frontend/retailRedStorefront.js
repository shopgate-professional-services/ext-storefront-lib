import appConfig from '@shopgate/pwa-common/helpers/config';
import getConfig from './helpers/getConfig';

const { config } = getConfig();
const { language } = appConfig;

// get language code from PWA
const languageCode = language.split('-')[0];

let retailRed;

export default () => {
  if (retailRed) {
    return retailRed;
  }

  retailRed = window.RetailRedStorefront.create({
    apiKey: config.apiKey,
    apiStage: config.apiStage,
    unitSystem: config.unitSystem,
    useGeolocationImmediately: config.useGeolocationImmediately,
    saveCustomerData: config.saveCustomerData,
    browserHistory: false,
    inventory: {
      hideNumber: config.inventoryHideNumber,
      showExactUntil: config.inventoryShowExactUntil,
      showLowUntil: config.inventoryShowLowUntil,
    },
    localization: {
      countries: config.localization.countries,
      localeCode: languageCode,
      en: config.localization.en,
      de: config.localization.de,
      es: config.localization.es,
      fr: config.localization.fr,
      it: config.localization.it,
      nl: config.localization.nl,
      pt: config.localization.pt,
    },
    legal: {
      terms: config.termsLink,
      privacy: config.privacyLink,
    },
    newsletterOptIn: config.newsletterOptIn,
    platform: 'engage',
  });
  return retailRed;
};
