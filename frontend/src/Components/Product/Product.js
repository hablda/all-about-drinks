import React from 'react';
import { StyledProduct } from './Product.styled';
import { Heading } from '../Typo/Heading';

export const Product = ({ product }) => {
  console.log(product);
  const imgPath = process.env.PUBLIC_URL + product.image.url;
  return (
    <StyledProduct>
      <img
        src={process.env.PUBLIC_URL + '/img/drink01.jpg'}
        alt={product.image.alt}
        title={product.image.title}
      />
      <p>Article No.: {product.number}</p>
      <Heading tag="h2">{product.name}</Heading>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse suscipit
        autem explicabo eum, repudiandae praesentium alias earum non quia
        reiciendis maiores molestiae deleniti doloremque. Quasi ullam fuga
        expedita id dignissimos?
      </p>
      <p>
        Preis <span>69.99$</span>
      </p>
    </StyledProduct>
  );
};
