import styled, { css } from 'styled-components';

export const StyledProduct = styled.article(({ theme }) => {
  const { spacing, color, breakpoint } = theme;
  return css`
    width: 25%;
    padding: ${spacing.l};
    margin: ${spacing.m} 0;
    border-radius: ${spacing.m};
    border: 1px solid ${color.primary};
    box-shadow: 0 0 ${spacing.s} ${color.grey};
    background-color: ${color.light};

    @media ${breakpoint.s} {
      width: calc(50% - ${spacing.m});
    }

    &:hover {
      cursor: pointer;
      background-color: ${color.white};
    }
  `;
});
