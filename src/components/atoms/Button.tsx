import React from 'react'
import styled from 'styled-components'
import { TypeButton, TypeStyledBtn } from '../types'

const Button:React.FC<TypeButton> =({fc, bg,border,btnText, size}) => {
  return (
    <StyledBtn fc={fc} bg={bg} border={border || bg} size={size} >
      {btnText}
    </StyledBtn>
  )
}

export default Button

const StyledBtn = styled.button<TypeStyledBtn>`
  width: 
  ${({size, theme}) => size === "large" 
    ? theme.size.large.width 
    : size === "medium"
    ? theme.size.medium.width
    : theme.size.small.width};
  height: 
  ${({size, theme}) => size === "large" 
    ? theme.size.large.height 
    : size === "medium"
    ? theme.size.medium.height
    : theme.size.small.height};
  border-radius: 10px;
  font-size:
  ${({size, theme}) => size === "large" 
    ? theme.size.large.fontSize 
    : size === "medium"
    ? theme.size.medium.fontSize
    : theme.size.small.fontSize};
  background-color: ${({bg, theme}) => bg || theme.colors.transparent};
  border:  1px solid ${({border}) => border};
  color: ${({fc}) => fc};
`