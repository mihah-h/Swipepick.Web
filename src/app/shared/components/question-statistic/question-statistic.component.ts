import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Test, TestResultItem, TooltipInformation} from "../../interfaces/test-interfaces";
import {TestApiService} from "../../services/test-api.service";

@Component({
  selector: 'app-question-statistic',
  templateUrl: './question-statistic.component.html',
  styleUrls: ['./question-statistic.component.css']
})
export class QuestionStatisticComponent {
  @Input()
  question!: TestResultItem
  @Input()
  questionNumber!: number

  constructor(private testService: TestApiService) {
  }

  ngOnInit(): void {

  }

  isCorrectAnswer(answerVariantIndex: number) {
    return answerVariantIndex === this.question.correctAnswer
  }
}
