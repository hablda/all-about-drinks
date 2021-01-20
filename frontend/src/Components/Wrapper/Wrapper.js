import React from 'react';
import StyledWrapper from './Wrapper.styled';

export const Wrapper = ({ children, center }) => (
  <StyledWrapper center={center}>{children}</StyledWrapper>
);
