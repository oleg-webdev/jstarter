
import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../Ui/Loader';

const ConditionalRender = ({ canIrender, children, showPreloader }) => {
  const fallback = showPreloader ? <Loader /> : null;
  return canIrender ? children() : fallback;
};

ConditionalRender.defaultProps = {
  showPreloader: true,
};

ConditionalRender.propTypes = {
  showPreloader: PropTypes.bool,
  canIrender: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired,
};

export default ConditionalRender;
