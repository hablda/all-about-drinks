import React from 'react';
import StyledProduct from './Product.styled';
import { Heading } from '../Typo/Heading';
import { Picture } from '../Picture';
import { Price } from '../Price';
import { CopyText } from '../Typo/Copytext';

export const Product = ({ product }) => {
  const { image, number, name, description, price } = product;
  return (
    <StyledProduct>
      {image ? <Picture image={image} round fullwidth /> : null}
      {number ? <CopyText small>Article No.: {number}</CopyText> : null}
      {name ? <Heading tag="h2">{name}</Heading> : null}
      {description ? <CopyText>{description}</CopyText> : null}
      {price ? <Price price={price}></Price> : null}
    </StyledProduct>
  );
};
