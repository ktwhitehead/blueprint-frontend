import React from 'react'
import { StyledButton } from './Button.styled'

interface Props {
  text: string
  hidden?: boolean
  onClick: () => void
}

const Button = ({ text, hidden = false, onClick }: Props) => {
  return (
    <StyledButton hide={hidden} onClick={onClick}>
      {text}
    </StyledButton>
  )
}

export default Button
