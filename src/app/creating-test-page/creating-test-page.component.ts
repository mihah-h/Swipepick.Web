import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {AuthApiService} from "../shared/services/auth-api.service";
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, Subject} from "rxjs";
import {CreatedQuestion, CreatedTest} from "../shared/interfaces/test-interfaces";
import {TestApiService} from "../shared/services/test-api.service";
import {TestPageComponent} from "../test-page/test-page.component";
import {QuestionComponent} from "../shared/components/question/question.component";

@Component({
  selector: 'app-creating-test-page',
  templateUrl: './creating-test-page.component.html',
  styleUrls: ['./creating-test-page.component.css']
})
export class CreatingTestPageComponent implements OnInit{

  testForm!: FormGroup
  test: CreatedQuestion[] = []
  savingQuestions$!: Subject<void>
  createdTestId!: string
  title!: FormControl
  numberOfQuestions = [1]

  @ViewChildren('question')
  questionComponents!: QueryList<QuestionComponent>


  constructor(
    private testService: TestApiService,
    private authService: AuthApiService
  ) {}

  ngOnInit(): void {
    this.title = new FormControl(null, [Validators.required])
    this.savingQuestions$ = new Subject()
  }

  get savingQuestionsObservable$(): Observable<void> {
    return this.savingQuestions$.asObservable()
  }

  saveQuestion(createdQuestion: CreatedQuestion): void{
    this.test.push(createdQuestion)
    if (this.test.length === this.numberOfQuestions.length) {
      this.createTest(this.test)
    }
  }

  addQuestion(): void{
    this.numberOfQuestions.push(this.numberOfQuestions[this.numberOfQuestions.length - 1] + 1)
    console.log(this.questionComponents)
  }

  createTest(createdTest: CreatedQuestion[]): void {
    if (this.authService.userEmail) {
      const test: CreatedTest = {
        userEmail: this.authService.userEmail,
        testDto: {
          title: this.title.value,
          questions: createdTest
        }
      }
      console.log(test)
      this.testService.createTest(test).subscribe((response) => this.createdTestId = response)
    }
  }

  del(r: number) {
    this.numberOfQuestions.splice(r, 1)
  }

  validation() {
    if (this.title.valid) {
      for (let questionComponent of this.questionComponents['_results']) {
        if (questionComponent['questionForm']['invalid']) {
          return true
        }
      }
      return false
    }
    return true
  }
}
