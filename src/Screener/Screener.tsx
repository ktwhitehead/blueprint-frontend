import React, { useState } from 'react'
import { useFetch } from '../hooks'
import { IScreener, TUserAnswers } from './types'
import ScreenerQuestion from './ScreenerQuestion'
import { Button, ProgressBar } from '../components'
import { Footer, HeaderText } from './Screener.styled'

interface Props {
  screenerId: number
}

const Screener = ({ screenerId }: Props) => {
  const url = `${import.meta.env.VITE_BLUEPRINT_API_URL}/screeners/${screenerId}`
  const { data } = useFetch<IScreener>(url)

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<TUserAnswers>({})

  const currentSection = data?.content?.sections?.[currentSectionIndex]
  const currentQuestion = currentSection?.questions?.[currentQuestionIndex]

  const isEndOfScreener = Object.keys(userAnswers).length === currentSection?.questions.length
  const isStartOfScreener = currentQuestionIndex === 0

  const progress =
    Object.keys(userAnswers).length && currentSection?.questions?.length
      ? (Object.keys(userAnswers).length / currentSection.questions.length) * 100
      : 0

  const handleAnswer = (questionId: number, value: number) => {
    const updatedAnswers = { ...userAnswers, [questionId]: value }
    setUserAnswers(updatedAnswers)
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  const handleSubmit = async () => {
    const answers = Object.keys(userAnswers).map((questionId: string) => ({
      question_id: Number(questionId),
      value: userAnswers[Number(questionId)],
    }))

    const options = {
      method: 'POST',
      body: JSON.stringify({ answers }),
      headers: { 'Content-Type': 'application/json' },
    }
    const request = await fetch(url, options)
    const result = await request.json()

    console.log('Assessment Results', result)
  }

  return (
    <>
      {currentQuestion && (
        <>
          <ProgressBar width={progress} />
          <HeaderText>{currentSection.title}</HeaderText>
          <ScreenerQuestion
            questionText={currentQuestion.title}
            questionId={currentQuestion.id}
            answers={currentQuestion.answers}
            userAnswers={userAnswers}
            onAnswer={handleAnswer}
          />
        </>
      )}
      {isEndOfScreener && (
        <>
          <h3>All finished! Please submit your answers.</h3>
          <Button text="Submit" onClick={() => handleSubmit()} />
        </>
      )}
      {!isEndOfScreener && (
        <Footer>
          <Button
            text="Back"
            onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
            hidden={isStartOfScreener}
          />
          <p>{`${currentQuestionIndex + 1} of ${currentSection?.questions.length}`}</p>
        </Footer>
      )}
    </>
  )
}

export default Screener
