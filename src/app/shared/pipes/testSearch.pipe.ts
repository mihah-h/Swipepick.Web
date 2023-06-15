import { Pipe, PipeTransform } from '@angular/core';
import {Test} from "../interfaces/test-interfaces";

@Pipe({
  name: 'testSearchPipe'
})
export class TestSearchPipe implements PipeTransform {

  transform(tests: Test[], search = ''): Test[] {
    if (!search.trim()) {
      return tests
    }

    return tests.filter(test => test.title.toLowerCase().includes(search.toLowerCase()))
  }
}
