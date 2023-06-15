import { Pipe, PipeTransform } from '@angular/core';
import {StudentStatisticItem, Test} from "../interfaces/test-interfaces";

@Pipe({
  name: 'studentSortedPipe'
})
export class StudentSortedPipe implements PipeTransform {

  transform(students: StudentStatisticItem[], param = ''): StudentStatisticItem[] {
    if (param === 'new') {
      return students.sort((student1, student2) =>
        Date.parse(student2.createdAt) - Date.parse(student1.createdAt))
    }

    if (param === 'old') {
      return students.sort((student1, student2) =>
        Date.parse(student1.createdAt) - Date.parse(student2.createdAt))
    }

    if (param === 'loyal') {
      return students.sort((student1, student2) =>
        student2.testResult - student1.testResult)
    }

    if (param === 'erroneous') {
      return students.sort((student1, student2) =>
        student1.testResult - student2.testResult)
    }

    return students
  }

}
