import React from 'react';
import PropTypes from 'prop-types';

import { WrapperStyle } from './styles';

export default function DefaultLayout({ children }) {
  return <WrapperStyle>{children}</WrapperStyle>;
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
