import styled, { css } from 'styled-components';

const StyledPrice = styled.p(({ theme }) => {
  const { spacing, fontSize, color } = theme;
  return css`
    font-size: ${fontSize.xl};
    color: ${color.primary};
    font-weight: bold;
    position: absolute;
    bottom: ${spacing.xl};
    left: ${spacing.xl};
    margin: 0;

    span {
      position: absolute;
      font-size: 55%;
      top: ${spacing.s};
    }
  `;
});

export default StyledPrice;
