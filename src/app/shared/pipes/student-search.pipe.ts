import { Pipe, PipeTransform } from '@angular/core';
import {StudentStatisticItem, Test} from "../interfaces/test-interfaces";

@Pipe({
  name: 'studentSearchPipe'
})
export class StudentSearchPipe implements PipeTransform {

  transform(students: StudentStatisticItem[], search = ''): StudentStatisticItem[] {
    if (!search.trim()) {
      return students
    }

    return students.filter(student => (student.name + student.lastname)
      .toLowerCase().includes(search.toLowerCase()))
  }

}
