import { Pipe, PipeTransform } from '@angular/core';
import {Test} from "../interfaces/test-interfaces";

@Pipe({
  name: 'testSortedPipe'
})
export class TestDateSortedPipe implements PipeTransform {

  transform(tests: Test[], param = ''): Test[] {
    if (param === 'new') {
      return tests.sort((test1, test2) =>
        Date.parse(test2.createdAt) - Date.parse(test1.createdAt))
    }

    if (param === 'old') {
      return tests.sort((test1, test2) =>
        Date.parse(test1.createdAt) - Date.parse(test2.createdAt))
    }

    if (param === 'loyal') {
      return tests.sort((test1, test2) =>
        test2.correctAnswersPercent - test1.correctAnswersPercent)
    }

    if (param === 'erroneous') {
      return tests.sort((test1, test2) =>
        test1.correctAnswersPercent - test2.correctAnswersPercent)
    }

    return tests
  }

}
