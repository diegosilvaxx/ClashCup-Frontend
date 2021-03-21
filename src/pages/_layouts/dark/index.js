import React from 'react';
import PropTypes from 'prop-types';
import { WrapperStyle, ContentStyle } from './styles';
export default function DarkLayout({ children }) {
  return (
    <WrapperStyle>
      <ContentStyle>{children}</ContentStyle>
    </WrapperStyle>
  );
}

DarkLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
