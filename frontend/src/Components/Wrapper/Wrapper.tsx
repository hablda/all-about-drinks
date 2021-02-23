import React from 'react'
import StyledWrapper from './Wrapper.styled'

interface WrapperProps {
  center: boolean
}

export const Wrapper: React.FC<WrapperProps> = ({ children, center }) => (
  <StyledWrapper center={center}>{children}</StyledWrapper>
)
