import React from 'react';
import StyledPrice from './Price.styled';

interface PriceProps {
  price: number
}

export const Price: React.FC<PriceProps> = ({ price }) => {
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
