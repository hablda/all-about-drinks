import styled, { css } from 'styled-components'

const StyledSearchBar = styled.label(({ theme }) => {
  const { spacing } = theme
  return css`
    margin: ${spacing.l} auto;

    input {
      padding: ${spacing.s};
    }
  `
})

export default StyledSearchBar
