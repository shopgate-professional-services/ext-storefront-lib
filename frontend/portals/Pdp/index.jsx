import React, { useEffect } from 'react';
import { css } from 'glamor';
import getRetailred from '../../retailRedStorefront';

// TODO: add styling
const Pdp = () => {
  useEffect(() => {
    getRetailred().renderReserveButton('#rr-dropin');
  }, []);

  return (
    <div id="rr-dropin" />
  );
};

export default Pdp;
