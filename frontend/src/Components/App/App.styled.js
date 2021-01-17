import styled, { css } from 'styled-components';

const StyledApp = styled.div(({ theme }) => {
  const { colors } = theme;
  return css`
    background-color: ${colors.light};
  `;
});

export default StyledApp;
