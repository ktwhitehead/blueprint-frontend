import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import ScreenerQuestion from './ScreenerQuestion'

const sampleAnswers = [
  { title: 'answer 1', value: 1 },
  { title: 'answer 2', value: 2 },
]

describe('ScreenerQuestion', () => {
  it('displays the provided question text', () => {
    const { getByTestId } = render(
      <ScreenerQuestion
        questionText="question text"
        questionId={1}
        answers={sampleAnswers}
        userAnswers={[]}
        onAnswer={() => null}
      />,
    )

    const header = getByTestId('screener-question-header-text')
    expect(header.textContent).toEqual('question text')
  })

  it('displays the provided multi-choice answers', () => {
    const { getByTestId } = render(
      <ScreenerQuestion
        questionText="question text"
        questionId={1}
        answers={sampleAnswers}
        userAnswers={[]}
        onAnswer={() => null}
      />,
    )

    const answer1 = getByTestId('screener-question-1-1-radio')
    const answer2 = getByTestId('screener-question-1-2-radio')

    expect(answer1).toBeVisible()
    expect(answer2).toBeVisible()
  })

  describe('when an answer is selected', () => {
    it('calls on the provided callback', () => {
      const answerCallback = jest.fn()
      const { getByTestId } = render(
        <ScreenerQuestion
          questionText="question text"
          questionId={1}
          answers={sampleAnswers}
          userAnswers={[]}
          onAnswer={answerCallback}
        />,
      )

      const answer1 = getByTestId('screener-question-1-1-radio')

      fireEvent.click(answer1)

      expect(answerCallback).toHaveBeenCalled()
    })

    it('displays a checked radio for the selected answer', () => {
      const answerCallback = jest.fn()
      const { getByTestId } = render(
        <ScreenerQuestion
          questionText="question text"
          questionId={1}
          answers={sampleAnswers}
          userAnswers={{ 1: 2 }}
          onAnswer={answerCallback}
        />,
      )

      const answer1 = getByTestId('screener-question-1-1-radio')
      const answer2 = getByTestId('screener-question-1-2-radio')

      expect(answer1.attributes).not.toHaveProperty('checked')
      expect(answer2.attributes).toHaveProperty('checked')
    })
  })
})
