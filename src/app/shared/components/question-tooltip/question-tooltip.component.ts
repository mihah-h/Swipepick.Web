import {Component, Input} from '@angular/core';
import {QuestionStatistic} from "../../interfaces/test-interfaces";

@Component({
  selector: 'app-question-tooltip',
  templateUrl: './question-tooltip.component.html',
  styleUrls: ['./question-tooltip.component.css']
})
export class QuestionTooltipComponent {

  @Input()
  showsTooltip!: boolean
  @Input()
  questionStatistic!: QuestionStatistic
  @Input()
  topPosition!: number | null
  @Input()
  leftPosition!: number | null
  @Input()
  questionNumber!: number

  getLoverPosition(): number | null {
    if (this.topPosition) {
      return this.topPosition - 220
    }
    return null
  }

  get correctAnswersPercent() {
    if (!this.questionStatistic.correctAnswersPercent
      || this.questionStatistic.correctAnswersPercent === 0
      || this.questionStatistic.correctAnswersPercent === 5
      || this.questionStatistic.correctAnswersPercent === 10
      || this.questionStatistic.correctAnswersPercent === 15
      || this.questionStatistic.correctAnswersPercent === 25
      || this.questionStatistic.correctAnswersPercent === 30
      || this.questionStatistic.correctAnswersPercent === 35
      || this.questionStatistic.correctAnswersPercent === 40
      || this.questionStatistic.correctAnswersPercent === 45
      || this.questionStatistic.correctAnswersPercent === 50
      || this.questionStatistic.correctAnswersPercent === 55
      || this.questionStatistic.correctAnswersPercent === 60
      || this.questionStatistic.correctAnswersPercent === 65
      || this.questionStatistic.correctAnswersPercent === 70
      || this.questionStatistic.correctAnswersPercent === 75
      || this.questionStatistic.correctAnswersPercent === 80
      || this.questionStatistic.correctAnswersPercent === 85
      || this.questionStatistic.correctAnswersPercent === 90
      || this.questionStatistic.correctAnswersPercent === 95
      || this.questionStatistic.correctAnswersPercent === 100) {
      return this.questionStatistic.correctAnswersPercent | 0
    }
    return (this.questionStatistic.correctAnswersPercent | 0) + 1
  }

  get wrongAnswersPercent() {
    return this.questionStatistic.wrongAnswersPercent | 0
  }
}
