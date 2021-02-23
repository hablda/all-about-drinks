import styled, { css } from 'styled-components'

export const H1Styled = styled.h1<{ margin: boolean }>(({ theme, margin }) => {
  const { spacing, fontSize, font, breakpoint } = theme
  return css`
    font-family: ${font.headline};
    font-size: ${fontSize.l};
    margin: ${margin ? `${spacing.l}` : null};
    text-transform: uppercase;

    @media ${breakpoint.s} {
      font-size: ${fontSize.xl};
    }
  `
})

export const H2Styled = styled.h2<{ margin: boolean }>(({ theme, margin }) => {
  const { spacing, fontSize, font } = theme
  return css`
    font-family: ${font.headline};
    font-size: ${fontSize.l};
    margin: ${margin ? `${spacing.l}` : null};
    text-transform: uppercase;
  `
})

export const H3Styled = styled.h3<{ margin: boolean }>(({ theme, margin }) => {
  const { spacing, fontSize, font } = theme
  return css`
    font-family: ${font.headline};
    font-size: ${fontSize.m};
    margin: ${margin ? `${spacing.l}` : null};
    text-transform: uppercase;
  `
})