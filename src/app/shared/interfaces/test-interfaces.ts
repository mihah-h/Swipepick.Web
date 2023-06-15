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
  IsSurvey?: boolean
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
  correctAnswersPercent: number
}

export interface QuestionStatistic {
  answerStatistic: AnswerStatistic
  correctAnswer: number
  correctAnswersCount: number
  correctAnswersPercent: number
  questionContent: string
  questionId: number
  wrongAnswersPercent: number
}

export interface AnswerStatistic {
  answerVariants: AnswerVariant[]
}

export interface AnswerVariant {
  answersPercent: number
  variant: string
}

export interface TooltipInformation {
  questionStatistic: QuestionStatistic
  $event: MouseEvent
  questionNumber: number
}


// Статистика

export interface TestStatistic {
  studentStatistic: StudentStatisticItem[]
  testResult: TestResultItem[]
  testTitle: string
}

export interface StudentStatisticItem {
  name: string
  lastname: string
  testResult: number
  createdAt: string
  testQuestionsCount: number
  studentAnswer: StudentAnswer
}

export interface StudentAnswer {
  answers: Answer[]
}

export interface Answer {
  variant: number
  questionId: number
  answerContent: string
  isCorrect: boolean
}

export interface TestResultItem {
  questionId: number
  wrongAnswersPercent: number
  correctAnswersPercent: number
  questionContent: string
  answerStatistic: AnswerStatistic
  correctAnswersCount: number
  correctAnswer: number
}

export interface AnswerStatistic {
  answerVariants: AnswerVariants[]
}

export interface AnswerVariants {
  variant: string
  answersPercent: number
}
