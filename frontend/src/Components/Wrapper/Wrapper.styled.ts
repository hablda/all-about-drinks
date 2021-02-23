import styled, { css } from 'styled-components'

const StyledWrapper = styled.section<{ center: boolean }>(
  ({ theme, center }) => {
    const { spacing } = theme
    return css`
      padding: ${spacing.xl};
      text-align: ${center ? 'center' : null};
      max-width: 1200px;
      margin: 0 auto;
    `
  }
)

export default StyledWrapper
