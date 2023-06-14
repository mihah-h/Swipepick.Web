export interface Question {
  questionId: number,
  questionContent: string,
  answer: Answer
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
  answerContent: string
}


// Интерфейсы для создания теста


export  interface CreatedTest {
  userEmail: string
  testDto: TestDto
}

export interface TestDto {
  title: string
  questions: CreatedQuestion[]
}

export interface CreatedQuestion {
  questionContent: string
  answer: CreatedAnswers
}

export interface CreatedAnswers {
  answerVariants: AnswerVariant[]
  correctAnswer: number
}

// Получение списка тесов

export interface TestsList {
  tests: Test[]
}

export interface Test {
  title: string
  uniqueCode: string
  createdAt: string
  questionStatistics: QuestionStatistic[]
}

export interface QuestionStatistic {
  questionId: number
  wrongAnswersPercent: number
  correctAnswersPercent: number
  questionContent: string
}


export interface TooltipInformation {
  questionStatistic: QuestionStatistic
  $event: MouseEvent
  questionNumber: number
}
