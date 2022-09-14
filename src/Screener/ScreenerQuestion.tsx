import React from 'react'
import { MultiChoiceAnswer, TUserAnswers } from './types'
import { Radio } from '../components'
import { v4 as uuidv4 } from 'uuid'
import { QuestionHeader, RadioWrapper } from './Screener.styled'

interface Props {
  questionText: string
  questionId: number
  answers?: MultiChoiceAnswer[]
  userAnswers: TUserAnswers
  onAnswer: (questionId: number, value: number) => void
}

const ScreenerQuestion = ({ questionText, questionId, answers, userAnswers, onAnswer }: Props) => {
  const isChecked = (answerValue: number) => {
    const hasBeenAnswered = Object.keys(userAnswers).includes(questionId.toString())
    const shouldBeChecked = userAnswers[questionId] === answerValue
    return hasBeenAnswered && shouldBeChecked
  }

  return (
    <>
      <QuestionHeader>{questionText}</QuestionHeader>
      <RadioWrapper>
        {answers?.map((answer) => (
          <Radio
            key={uuidv4()}
            text={answer.title}
            id={questionId}
            value={answer.value}
            checked={isChecked(answer.value)}
            onSelect={onAnswer}
          />
        ))}
      </RadioWrapper>
    </>
  )
}

export default ScreenerQuestion
