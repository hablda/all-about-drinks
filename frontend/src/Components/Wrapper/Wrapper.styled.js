import styled, { css } from 'styled-components';

const StyledWrapper = styled.section(({ theme }) => {
  const { spacing } = theme;
  return css`
    padding: ${spacing.xl};
  `;
});

export default StyledWrapper;
