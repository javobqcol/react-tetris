import React from 'react'
import { StyledDisplay } from './styles/StyledDisplay'

export const Display = ({gameOver, text}) => {
  return (
    <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
  )
}
