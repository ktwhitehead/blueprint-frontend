import React from 'react'
import { RadioLabel } from './Radio.styled'

interface Props {
  text: string
  id: number
  value: number
  checked: boolean
  onSelect: (id: number, value: number) => void
}

const Radio = ({ text, id, value, checked, onSelect }: Props) => {
  return (
    <RadioLabel>
      <input
        type="radio"
        name="radio"
        defaultChecked={checked}
        onKeyDown={() => onSelect(id, value)}
        onClick={() => onSelect(id, value)}
      />
      {text}
    </RadioLabel>
  )
}

export default Radio
