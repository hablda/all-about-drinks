import styled, { css } from 'styled-components';

const StyledHeader = styled.header(({ theme }) => {
  const { spacing, color } = theme;
  return css`
    width: 100%;
    border-radius: 0 0 ${spacing.l} ${spacing.l};
    background-image: linear-gradient(
      10deg,
      ${color.primary},
      ${color.secondary}
    );
    box-shadow: 0 ${spacing.xs} ${spacing.s} ${color.dark};
    color: ${color.light};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;

    ul {
      width: 100%;
      display: flex;
      justify-content: center;

      li {
        padding: 0 20px;
        list-style: none;
      }
    }
  `;
});

export default StyledHeader;
