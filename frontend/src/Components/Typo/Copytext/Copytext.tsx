import React from 'react'
import { StyledCopytext } from './Copytext.styled'

interface CopyTextProps {
  small: boolean
}

export const CopyText: React.FC<CopyTextProps> = ({ small, children }) => {
  return <StyledCopytext small={small}>{children}</StyledCopytext>
}
