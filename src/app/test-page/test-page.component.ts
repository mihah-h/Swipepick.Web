import {Component, OnDestroy, OnInit} from '@angular/core';
import {TestApiService} from "../shared/services/test-api.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Observable, Subscription, switchMap} from "rxjs";
import {Question, Answer, SelectedResponse} from "../shared/interfaces/test-interfaces";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css'],
})
export class TestPageComponent implements OnInit, OnDestroy{
  test$!: Observable<Question[]>
  testId!: string
  test!: Question[]
  questionNumber = 0
  isEnd = false
  isStart = true
  answers: SelectedResponse[] = []
  result$!: Observable<any>
  result!: number
  testSubscription!: Subscription
  userDataForm!: FormGroup

  constructor(
    private route: ActivatedRoute,
    private testService: TestApiService
  ) {}

  ngOnInit() {
    this.test$ = this.route.params
      .pipe(switchMap((params: Params) => {
        this.testId = params['id']
        return this.testService.getTest(this.testId)
      }))

    this.testSubscription = this.test$.subscribe((test) => {
      this.test = test
      console.log(this.test)
    })

    this.userDataForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required
      ]),
      lastname: new FormControl(null, [
        Validators.required
      ])
    })
  }

  ngOnDestroy(): void {
    this.testSubscription.unsubscribe()
  }

  saveUserResponse(answerNumber: number) {
    this.answers.push({
      questionId: this.test[this.questionNumber].answer.questionId,
      answerCode: answerNumber,
      answerContent: this.test[this.questionNumber].answer.answerVariants[answerNumber].variant
    })
    if (this.questionNumber + 1 === this.test.length) {
      this.isEnd = true
      console.log({
        testCode: this.testId,
        selectedAnswers: this.answers,
        name: this.userDataForm.value.name,
        lastname: this.userDataForm.value.lastname
      })
      this.result$ = this.testService.submitAnswers(
      {
        testCode: this.testId,
        selectedAnswers: this.answers,
        name: this.userDataForm.value.name,
        lastname: this.userDataForm.value.lastname
      }
      )
      console.log(this.userDataForm.value.name, this.userDataForm.value.lastname)

      this.result$.subscribe(result => this.result = result)
    }
    this.questionNumber++
  }
}
