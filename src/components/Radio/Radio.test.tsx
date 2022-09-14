import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Radio from './Radio'

describe('Radio', () => {
  it('it displays the passed in text', () => {
    render(<Radio id={1} text={'radio text'} value={1} testId={'test'} onSelect={() => null} />)
    const radio = screen.getByTestId('test-radio')

    expect(radio.nextSibling?.textContent).toEqual('radio text')
  })

  describe('checked state', () => {
    it('it is not checked by default', () => {
      render(<Radio id={1} text={'radio text'} value={1} testId={'test'} onSelect={() => null} />)
      const radio = screen.getByTestId('test-radio')

      expect(radio.attributes).not.toHaveProperty('checked')
    })

    it('is checked when the prop is passed', () => {
      render(
        <Radio id={1} text={'radio text'} value={1} testId={'test'} checked={true} onSelect={() => null} />,
      )
      const radio = screen.getByTestId('test-radio')

      expect(radio.attributes).toHaveProperty('checked')
    })
  })

  it('calls the onSelect callback when selected', () => {
    const selectCallback = jest.fn()
    render(<Radio id={1} text={'radio text'} value={1} testId={'test'} onSelect={selectCallback} />)
    const radio = screen.getByTestId('test-radio')

    fireEvent.click(radio)

    expect(selectCallback).toHaveBeenCalledWith(1, 1)
  })
})
