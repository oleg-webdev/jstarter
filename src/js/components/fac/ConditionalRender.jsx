
import React from 'react';
import PropTypes from 'prop-types';

const ConditionalRender = ({ canIrender, children, showPreloader }) => {
  const fallback = showPreloader ? <p>Loading...</p> : null;
  return (
    canIrender ? children() : fallback
  );
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
