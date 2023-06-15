import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable, Subscription} from "rxjs";
import {CreatedQuestion} from "../../interfaces/test-interfaces";

@Component({
  selector: 'app-survey-question',
  templateUrl: './survey-question.component.html',
  styleUrls: ['./survey-question.component.css']
})
export class SurveyQuestionComponent implements OnInit{
  questionForm!: FormGroup
  SavingQuestionsObservableSub!: Subscription

  @Input()
  questionNumber!: number

  @Input()
  savingQuestionsObservable$!: Observable<void>

  @Input()
  numberOfQuestions!: number[]

  @Output()
  transmittingCreatedQuestion = new EventEmitter<CreatedQuestion>();

  @Output()
  deleteQuestionEvent = new EventEmitter<number>();

  ngOnInit(): void {
    this.questionForm = new FormGroup({
      questionContent: new FormControl(null, [Validators.required]),
      answers: new FormArray([
        new FormControl(null, [Validators.required])
      ])
    })


    this.SavingQuestionsObservableSub = this.savingQuestionsObservable$.subscribe(() => {
      const question: CreatedQuestion = {
        questionContent: this.questionForm.value.questionContent,
        answer: {
          answerVariants: this.questionForm.value.answers.map((answer: string) => {
            return {variant: answer}
          }),
          correctAnswer: 0
        }

      }

      this.transmittingCreatedQuestion.emit(question)
    })
  }

  ngOnDestroy() {
    this.SavingQuestionsObservableSub.unsubscribe()
  }

  getAnswers(): FormArray{
    return this.questionForm.get('answers') as FormArray;
  }

  addAnswers(): void{
    if (this.getAnswers().length < 4) {
      (this.getAnswers().push(new FormControl(null, [Validators.required])))
    }
  }

  deleteAnswer(answerIndex: number): void {
    if (this.getAnswers().value.length > 1) {
      this.getAnswers().removeAt(answerIndex)
    } else if (this.getAnswers().value.length > 1) {
      this.getAnswers().removeAt(answerIndex)
    }
  }

  deleteQuestion() {
    if (this.numberOfQuestions.length > 1) {
      this.deleteQuestionEvent.next(this.questionNumber)
      this.SavingQuestionsObservableSub.unsubscribe()
    }
  }
}
