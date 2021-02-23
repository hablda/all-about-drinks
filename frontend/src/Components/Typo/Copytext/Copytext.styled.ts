import styled, { css } from 'styled-components'

export const StyledCopytext = styled.p<{ small: boolean }>(
  ({ theme, small }) => {
    const { spacing, fontSize } = theme
    return css`
      font-size: ${small ? fontSize.xs : fontSize.s};
      margin: ${spacing.s} 0;
    `
  }
)
