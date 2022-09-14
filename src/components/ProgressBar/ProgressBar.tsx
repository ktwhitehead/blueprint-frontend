import React from 'react'
import { Wrapper, Bar, Fill } from './ProgressBar.styled'

interface Props {
  width: number
}

const ProgressBar = ({ width }: Props) => {
  return (
    <Wrapper>
      <Bar>
        <Fill width={width}></Fill>
      </Bar>
    </Wrapper>
  )
}

export default ProgressBar
