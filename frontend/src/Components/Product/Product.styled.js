import styled, { css } from 'styled-components';

export const StyledProduct = styled.article(({ theme }) => {
  const { spacing, color, breakpoint } = theme;
  return css`
    width: calc(33% - ${spacing.m});
    padding: ${spacing.l};
    margin: ${spacing.m} 0;
    border-radius: ${spacing.m};
    border: 1px solid ${color.primary};
    box-shadow: 0 0 ${spacing.s} ${color.grey};
    background-color: ${color.light};

    @media ${breakpoint.l} {
      width: calc(25% - ${spacing.m});
    }

    &:hover {
      cursor: pointer;
      background-color: ${color.white};
    }
  `;
});
