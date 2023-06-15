import { Pipe, PipeTransform } from '@angular/core';
import {StudentStatisticItem, TestResultItem} from "../interfaces/test-interfaces";

@Pipe({
  name: 'questionSorted'
})
export class QuestionSortedPipe implements PipeTransform {

  transform(questions: TestResultItem[], param = ''): TestResultItem[] {
    if (param === 'standard') {
      return questions
    }

    if (param === 'loyal') {
      return questions.sort((question1, question2) =>
        question2.correctAnswersPercent - question1.correctAnswersPercent)
    }

    if (param === 'erroneous') {
      return questions.sort((question1, question2) =>
        question1.correctAnswersPercent - question2.correctAnswersPercent)
    }

    return questions
  }

}
