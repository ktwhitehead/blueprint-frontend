import React from 'react'
import { RadioLabel } from './Radio.styled'

interface Props {
  text: string
  id: number
  value: number
  checked?: boolean
  testId: string
  onSelect: (id: number, value: number) => void
}

const Radio = ({ text, id, value, checked = false, testId, onSelect }: Props) => {
  return (
    <RadioLabel>
      <input
        type="radio"
        name="radio"
        data-testid={`${testId}-radio`}
        defaultChecked={checked}
        onKeyDown={() => onSelect(id, value)}
        onClick={() => onSelect(id, value)}
      />
      {text}
    </RadioLabel>
  )
}

export default Radio
