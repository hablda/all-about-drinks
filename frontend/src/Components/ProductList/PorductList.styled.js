import styled, { css } from 'styled-components';

const StyledProductList = styled.section(({ theme }) => {
  const { spacing } = theme;
  return css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  `;
});

export default StyledProductList;
