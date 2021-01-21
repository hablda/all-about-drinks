import React from 'react';
import StyledProduct from './Product.styled';
import { Heading } from '../Typo/Heading';
import { Picture } from '../Picture';
import { Price } from '../Price';

export const Product = ({ product }) => {
  const { image, number, name, description, price } = product;
  return (
    <StyledProduct>
      {image ? <Picture image={image} round fullwidth /> : null}
      {number ? <p>Article No.: {number}</p> : null}
      {name ? <Heading tag="h2">{name}</Heading> : null}
      {description ? <p>{description}</p> : null}
      {price ? <Price price={price}></Price> : null}
    </StyledProduct>
  );
};
