export type TUserAnswers = Record<number, number>

interface Question {
  id: number
  title: string
  type: string
  answers: MultiChoiceAnswer[]
}

export interface MultiChoiceAnswer {
  title: string
  value: number
}

interface ScreenerSection {
  type: 'standard'
  title: string
  answers?: MultiChoiceAnswer[]
  questions: Question[]
}

interface ScreenerContent {
  sections: ScreenerSection[]
}

export interface IScreener {
  id: string
  name: string
  disorder: string
  content: ScreenerContent
}

export interface HandleAnswerProps {
  id: number
}

export interface IAssessmentResults {
  results: string[]
}
