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
      return this.topPosition - 200
    }
    return null
  }

  isCorrectAnswer(answerVariantIndex: number) {
    return answerVariantIndex === this.questionStatistic.correctAnswer
  }
}
