import React from 'react';
import { StyledCopytext } from './Copytext.styled';

export const CopyText = ({ small, children }) => {
  return <StyledCopytext small={small}>{children}</StyledCopytext>;
};
