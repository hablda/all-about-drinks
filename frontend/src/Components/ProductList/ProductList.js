import React from 'react';
import StyledProductList from './PorductList.styled';
import { Product } from '../Product';

export const ProductList = ({ products }) => {
  return (
    <StyledProductList>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </StyledProductList>
  );
};
