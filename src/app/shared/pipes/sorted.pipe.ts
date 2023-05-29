import { Pipe, PipeTransform } from '@angular/core';
import {Test} from "../interfaces/test-interfaces";

@Pipe({
  name: 'sorted'
})
export class SortedPipe implements PipeTransform {

  transform(tests: Test[], param = ''): Test[] {
    if (param === 'new') {
      return tests.sort((test1, test2) => Date.parse(test2.createdAt) - Date.parse(test1.createdAt))
    }

    if (param === 'old') {
      return tests.sort((test1, test2) => Date.parse(test1.createdAt) - Date.parse(test2.createdAt))
    }

    return tests
  }

}
