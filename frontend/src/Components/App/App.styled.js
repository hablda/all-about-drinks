import styled, { css } from 'styled-components';

const StyledApp = styled.div(({ theme }) => {
  const { color } = theme;
  return css`
    background-color: ${color.light};
  `;
});

export default StyledApp;
