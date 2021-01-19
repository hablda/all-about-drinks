import React from 'react';
import { StyledProductList } from './PorductList.styled';
import { Product } from '../Product';
import { Heading } from '../Typo/Heading';

export const ProductList = ({ products }) => {
  return (
    <StyledProductList>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </StyledProductList>
  );
};
