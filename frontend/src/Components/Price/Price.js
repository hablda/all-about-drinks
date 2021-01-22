import React from 'react';
import StyledPrice from './Price.styled';

export const Price = ({ price }) => {
  const splitPrice = () => {
    return price.toString().split('.');
  };

  return (
    <StyledPrice>
      {price.toString().includes('.')
        ? '$' + splitPrice()[0] + '.'
        : '$' + price + '.-'}
      {splitPrice() ? <span>{splitPrice()[1]}</span> : null}
    </StyledPrice>
  );
};
