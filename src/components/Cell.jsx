import React from 'react'

import { TETROMINUS } from '../tetrominus'
import { StyledCells } from './styles/StyledCells'

const Cell = ({ type }) => {
  
  return (
    <StyledCells type={type} color={TETROMINUS[type]?.color} />
  )
}
export default React.memo(Cell)