import React from 'react';
import PropTypes from 'prop-types';

const SectionHeading = ({ children, overlay, className }) => (
  <h2 className={overlay ? `font-bold text-zinc-400 md:text-zinc-500 font-mplus opacity-10 ${className}` : 'my-2 text-lg font-mplus underline-offset-4 underline decoration-4 decoration-zinc-600 text-zinc-900 dark:text-zinc-50'}>
    {children}
  </h2>
);

SectionHeading.propTypes = {
  children: PropTypes.node.isRequired,
  overlay: PropTypes.bool,
  className: PropTypes.string,
};

SectionHeading.defaultProps = {
  overlay: false,
  className: '',
};

export default SectionHeading;
