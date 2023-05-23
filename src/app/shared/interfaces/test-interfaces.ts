export interface Question {
  questionId: number,
  questionContent: string,
  answers: Answer[]
}

export interface Answer {
  answerVariants: AnswerVariant[]
  questionId: number
}

export interface AnswerVariant {
  variant: string
}

// export interface SelectedResponses {
//   testUri: string
//   selectedAnsws: SelectedResponse[]
// }
// Отправка данных пройденного теста

export interface SelectedResponses {
  testCode: string
  selectedAnswers: SelectedResponse[]
  name: string
  lastname: string
}

export interface SelectedResponse {
  questionId: number
  answerCode: number
}


// Интерфейсы для создания теста


export  interface CreatedTest {
  userEmail: string
  testDto: TestDto
}

export interface TestDto {
  questions: CreatedQuestion[]
}

export interface CreatedQuestion {
  questionContent: string
  answers: CreatedAnswers[]
}

export interface CreatedAnswers {
  answerVariants: AnswerVariant[]
  correctAnswer: number
}

