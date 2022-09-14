import styled from 'styled-components'

interface ButtonProps {
  hide: boolean
}

const StyledButton = styled.button<ButtonProps>`
  ${(props) => props.hide && `visibility: hidden;`}
  color: rgba(255, 255, 255, 0.87);
`
export { StyledButton }
