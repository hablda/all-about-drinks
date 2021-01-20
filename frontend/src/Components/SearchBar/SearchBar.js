import React from 'react';
import StyledSearchBar from './SearchBar.styled';

export const SearchBar = ({ placeholder, onChange, type }) => {
  return (
    <StyledSearchBar>
      <input type placeholder={placeholder} onChange={onChange} />
    </StyledSearchBar>
  );
};
