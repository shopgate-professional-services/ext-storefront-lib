import { css } from 'glamor';
import {
  themeConfig,
  themeName,
} from '@shopgate/pwa-common/helpers/config';

const isIOS = themeName.includes('ios');
const borderRadius = isIOS ? '5px' : '0px';

// Override custom colors
css.global('#rr-omni #rr-omni-custom, #rr-omni-reserve-button, #rr-inventory-custom, #rr-inventory', {
  '--rr-color-primary': themeConfig.colors.cta,
  '--rr-color-primary-contrast': themeConfig.colors.ctaContrast,
  '--rr-color-link': themeConfig.colors.cta,
  '--rr-color-button-background-disabled': themeConfig.colors.shade5,
  '--rr-color-state-alarm': themeConfig.colors.error,
  '--rr-color-state-warning': themeConfig.colors.ff9300,
  '--rr-color-state-success': themeConfig.colors.success,
  '--rr-font-family': themeConfig.typography.family,
});

// Custom Styling
css.global('div.rr-modal-base', {
  paddingTop: isIOS ? 'calc(1.25rem + var(--safe-area-inset-top)) !important' : '',
});

css.global('#rr-omni #rr-omni-custom .rr-button', {
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: 700,
  borderRadius,
  width: '100%',
  padding: '11px 9.6px 13px',
  height: 'inherit',
});

css.global('#rr-omni #rr-omni-custom .rr-store', {
  padding: '16px 16px',
});

css.global('#rr-omni #rr-omni-custom .rr-list', {
  padding: '16px 4px',
});

css.global('#rr-dropin #rr-inventory-custom #rr-inventory', {
  border: 0,
  padding: isIOS ? '12px 8px' : '12px 0',
});

css.global('#rr-dropin #rr-inventory-custom #rr-inventory #rr-inventory-reserve', {
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: 700,
  width: '100%',
  height: '47px',
  lineHeight: 'inherit',
  borderRadius,
});

css.global('#rr-dropin #rr-inventory-custom #rr-inventory .rr-inventory-postalsearch .rr-button', {
  textTransform: 'none',
  fontSize: '14px',
  fontWeight: 700,
  width: '100%',
  height: '38px',
  lineHeight: 'inherit',
  borderRadius,
  marginTop: '2px',
});

css.global('#rr-dropin #rr-omni-reserve-button', {
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: 700,
  width: '100%',
  height: '47px',
  lineHeight: 'inherit',
  borderRadius,
});

css.global('#rr-dropin #rr-inventory-custom fieldset', {
  borderRadius,
});

css.global('#rr-omni.rr-omni-int .rr-text-field fieldset', {
  borderRadius,
});

const container = css(isIOS ? {
  padding: '8px',
} : {
  padding: '16px',
}).toString();

const selectStoreInactive = css({
  ' #rr-inventory-reserve': {
    pointerEvents: 'none',
    background: themeConfig.colors.shade5,
  },
  ' #rr-inventory-find': {
    pointerEvents: 'none',
    background: themeConfig.colors.shade5,
  },
}).toString();

const reserveButtonInactive = css({
  ' #rr-omni-reserve-button': {
    pointerEvents: 'none',
    background: themeConfig.colors.shade5,
  },
}).toString();

export default {
  container,
  selectStoreInactive,
  reserveButtonInactive,
};
