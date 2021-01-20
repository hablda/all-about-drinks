import styled, { css } from 'styled-components';

const StyledProduct = styled.article(({ theme }) => {
  const { spacing, color, breakpoint } = theme;
  return css`
    width: 100%;
    padding: ${spacing.l};
    margin: ${spacing.m} 0;
    border-radius: ${spacing.m};
    border: 1px solid ${color.primary};
    box-shadow: 0 0 ${spacing.s} ${color.grey};
    background-color: ${color.light};

    @media ${breakpoint.m} {
      width: calc(50% - ${spacing.m});
    }

    @media ${breakpoint.l} {
      width: calc(33% - ${spacing.m});
    }

    &:hover {
      cursor: pointer;
      background-color: ${color.white};
    }
  `;
});

export default StyledProduct;
