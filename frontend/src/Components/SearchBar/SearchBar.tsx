import React from 'react'
import StyledSearchBar from './SearchBar.styled'

interface SearchBarProps {
  placeholder: string
  type: string
  onChange: () => string
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  onChange,
  type,
}) => {
  return (
    <StyledSearchBar>
      <input type={type} placeholder={placeholder} onChange={onChange} />
    </StyledSearchBar>
  )
}
