import React from 'react';
import { StyledProduct } from './Product.styled';
import { Heading } from '../Typo/Heading';

export const Product = ({ product }) => {
  console.log(product);
  const imgPath = process.env.PUBLIC_URL + '/' + product.image.url;
  return (
    <StyledProduct>
      <img src={imgPath} alt={product.image.alt} title={product.image.title} />
      <p>Article No.: {product.number}</p>
      <Heading tag="h2">{product.name}</Heading>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </StyledProduct>
  );
};
