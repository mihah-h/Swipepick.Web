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
  correctAnswer!: AbstractControl
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

    this.correctAnswer = this.getAnswers().controls[0]

    this.SavingQuestionsObservableSub = this.savingQuestionsObservable$.subscribe(() => {
      const question: CreatedQuestion = {
        questionContent: this.questionForm.value.questionContent,
        answers: [{
          answerVariants: this.questionForm.value.answers.map((answer: string) => {
            return {variant: answer}
          }),
          correctAnswer: this.getAnswers().controls.indexOf(this.correctAnswer)
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

  setCorrectAnswer(answer: AbstractControl): void {
    this.correctAnswer = answer
  }

  deleteAnswer(answerIndex: number): void {
    this.getAnswers().removeAt(answerIndex)
  }
}
