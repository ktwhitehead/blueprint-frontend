import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
`

const Bar = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  padding: 3px;
  border-radius: 2px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
  height: 8px;
`

interface FillProps {
  width: number
}

const Fill = styled.span<FillProps>`
  display: block;
  height: 8px;
  background-color: #646cff;
  border-radius: 2px;
  transition: width 500ms ease-in-out;
  width: ${(props) => props.width}%;
`

export { Wrapper, Bar, Fill }
