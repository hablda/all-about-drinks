import React from 'react';
import { StyledProduct } from './Product.styled';
import { Heading } from '../Typo/Heading';
import { Picture } from '../Picture';

export const Product = ({ product }) => {
  const { image, number, name, description, price } = product;
  return (
    <StyledProduct>
      <Picture image={image} round fullwidth />
      <p>Article No.: {number}</p>
      <Heading tag="h2">{name}</Heading>
      <p>{description}</p>
      <p>{price}</p>
    </StyledProduct>
  );
};
