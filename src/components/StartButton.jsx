import React from 'react'
import { StyledStartButtom } from './styles/StyledStartButtom'

export const StartButton = ({callBack}) => {
  return (
    <StyledStartButtom onClick={callBack}>Start Game</StyledStartButtom>
  )
}
