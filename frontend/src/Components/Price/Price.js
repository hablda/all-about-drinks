import React from 'react';
import StyledPrice from './Price.styled';

export const Price = ({ price }) => {
  const splitPrice = () => {
    if (price.toString().includes('.')) {
      return price.toString().split('.');
    } else {
      return price + '.-';
    }
  };

  return (
    <StyledPrice>
      {splitPrice() ? '$' + splitPrice()[0] + '.' : '$' + price + '.-'}
      {splitPrice() ? <span>{splitPrice()[1]}</span> : null}
    </StyledPrice>
  );
};
