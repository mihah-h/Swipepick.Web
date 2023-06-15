import { Pipe, PipeTransform } from '@angular/core';
import {StudentStatisticItem, TestResultItem} from "../interfaces/test-interfaces";

@Pipe({
  name: 'questionSearch'
})
export class QuestionSearchPipe implements PipeTransform {

  transform(questions: TestResultItem[], search = ''): TestResultItem[] {
    if (!search.trim()) {
      return questions
    }

    return questions.filter(question => question.questionContent
      .toLowerCase().includes(search.toLowerCase()))
  }

}
