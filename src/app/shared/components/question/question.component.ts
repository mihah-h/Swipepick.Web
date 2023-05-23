import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup} from "@angular/forms";
import {Observable, Observer, Subject, Subscription} from "rxjs";
import {CreatedQuestion} from "../../interfaces/test-interfaces";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit{

  questionForm!: FormGroup
  correctAnswer = 0
  SavingQuestionsObservableSub!: Subscription

  @Input()
  questionNumber!: number

  @Input()
  savingQuestionsObservable$!: Observable<void>

  @Output()
  transmittingCreatedQuestion = new EventEmitter<CreatedQuestion>();

  ngOnInit(): void {
    this.questionForm = new FormGroup({
      questionContent: new FormControl(null),
      answers: new FormArray([
        new FormControl(null)
      ])
    })

    this.SavingQuestionsObservableSub = this.savingQuestionsObservable$.subscribe(() => {
      const question: CreatedQuestion = {
        questionContent: this.questionForm.value.questionContent,
        answers: [{
          answerVariants: this.questionForm.value.answers.map((answer: string) => {
            return {variant: answer}
          }),
          correctAnswer: this.correctAnswer
        }]

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
      (this.getAnswers().push(new FormControl(null)))
    }
  }

  setCorrectAnswer(correctAnswerIndex: number): void {
    this.correctAnswer = correctAnswerIndex
  }

  deleteAnswer(answerIndex: number): void {
    this.getAnswers().removeAt(answerIndex)
  }
}
