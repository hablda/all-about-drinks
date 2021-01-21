import styled, { css } from 'styled-components';

export const StyledCopytext = styled.p(({ theme, margin }) => {
  const { spacing, fontSize, font, breakpoint } = theme;
  return css`
    font-family: ${font.headline};
    font-size: ${fontSize.l};
    margin: ${margin ? `${spacing.l}` : null};
    text-transform: uppercase;

    @media ${breakpoint.s} {
      font-size: ${fontSize.xl};
    }
  `;
});

});
