import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import connect from './connector';
import getRetailred from '../../retailRedStorefront';
import getConfig from '../../helpers/getConfig';
import styles from './style';

const { config } = getConfig();

/**
 * Checks if all selections have been made.
 * @param {Object} variants 
 * @param {Object} props 
 * @returns {boolean}
 */
const checkSelection = (variants, props) => {
  const { characteristics } = variants
  const { variantId } = props;

  if (characteristics) {
    const filteredValues = Object.keys(characteristics).filter(key => !!characteristics[key]);
    return !!((filteredValues.length === variants.characteristics.length) && variantId);
  }

  return false;
}

/**
 * ClickReserveButton component
 */
const ClickReserveButton = ({ isOrderable, variants, ...props }) => {
  useEffect(() => {
    // Render reserveButton or liveInventory template
    if (config.renderLiveInventory) {
      getRetailred().renderLiveInventory('#rr-dropin', { variant: config.renderLiveInventoryMode });
    } else {
      getRetailred().renderReserveButton('#rr-dropin');
    }
  }, []);

  // Orderable and variant selection made
  const isReservable = Object.keys(variants).length > 0 ? (isOrderable && checkSelection(variants, props)) : isOrderable;

  return (
    (isReservable) ? (
      <div className={styles.container}>
        <div>
          <div id="rr-dropin" />
        </div>
      </div>
      ) : (
      <div className={styles.container}>
        <div className={config.renderLiveInventory ? styles.selectStoreInactive : styles.reserveButtonInactive}>
          <div id="rr-dropin" />
        </div>
      </div>
    )
  );
};

ClickReserveButton.propTypes = {
  variants: PropTypes.object.isRequired,
  isOrderable: PropTypes.bool,
};

ClickReserveButton.defaultProps = {
  isOrderable: true,
};

export default connect(ClickReserveButton);
