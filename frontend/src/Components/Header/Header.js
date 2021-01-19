import React from 'react';
import StyledHeader from './Header.styled';
import { Heading } from '../Typo/Heading';

export const Header = () => {
  return (
    <StyledHeader>
      <img
        src={process.env.PUBLIC_URL + '/img/logo.png'}
        alt="All about drinks Logo"
        title="All about drinks Logo"
      />
      <Heading tag="h1" margin>
        All about drinks
      </Heading>
      <ul>
        <li>Products</li>
        <li>Contact</li>
        <li>About this website</li>
      </ul>
    </StyledHeader>
  );
};
