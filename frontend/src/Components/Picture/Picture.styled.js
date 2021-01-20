import styled, { css } from 'styled-components';

export const StyledPictureContainer = styled.div(
  ({ round, fullwidth, theme }) => {
    const { spacing } = theme;
    return css`
      border-radiusssss: ${round ? spacing.m : null};
      overflow: hidden;

      img {
        width: ${fullwidth ? '100%' : 'auto'};
      }
    `;
  }
);
