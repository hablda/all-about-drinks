import React from 'react'
import { H1Styled, H2Styled, H3Styled } from './Heading.styled'

interface HeadingProps {
  tag: string
  margin: boolean
}

export const Heading: React.FC<HeadingProps> = ({ tag, margin, children }) => {
  switch (tag) {
    case 'h1':
      return <H1Styled margin={margin}>{children}</H1Styled>
    case 'h2':
      return <H2Styled margin={margin}>{children}</H2Styled>
    default:
      return <H3Styled margin={margin}>{children}</H3Styled>
  }
}
