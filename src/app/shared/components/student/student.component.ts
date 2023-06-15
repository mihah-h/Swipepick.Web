import {Component, EventEmitter, Input, Output} from '@angular/core';
import {StudentStatisticItem, Test, TooltipInformation} from "../../interfaces/test-interfaces";
import {TestApiService} from "../../services/test-api.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  @Input()
  student!: StudentStatisticItem

  studentStatisticsWidth!: number

  constructor(private testService: TestApiService) {
  }

  ngOnInit(): void {
    this.studentStatisticsWidth = this.getStudentStatisticsWidth()
  }


  getStudentStatisticsWidth() {
    const statisticsBlockWidth = 550
    return (statisticsBlockWidth - ((this.student.testQuestionsCount - 1) * 4))
      / this.student.testQuestionsCount
  }
}
