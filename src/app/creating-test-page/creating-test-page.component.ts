import {Component, OnInit} from '@angular/core';
import {AuthApiService} from "../shared/services/auth-api.service";
import {AbstractControl, FormArray, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, Subject} from "rxjs";
import {CreatedQuestion, CreatedTest} from "../shared/interfaces/test-interfaces";
import {TestApiService} from "../shared/services/test-api.service";

@Component({
  selector: 'app-creating-test-page',
  templateUrl: './creating-test-page.component.html',
  styleUrls: ['./creating-test-page.component.css']
})
export class CreatingTestPageComponent implements OnInit{

  testForm!: FormGroup
  numberOfQuestions = 1
  test: CreatedQuestion[] = []
  savingQuestions$!: Subject<void>
  num!: string
  title: string = ''
  countQuestions = [1]

  constructor(
    private testService: TestApiService,
    private authService: AuthApiService
  ) {}

  ngOnInit(): void {
    this.savingQuestions$ = new Subject()
  }

  get savingQuestionsObservable$(): Observable<void> {
    return this.savingQuestions$.asObservable()
  }

  saveQuestion(createdQuestion: CreatedQuestion): void{
    this.test.push(createdQuestion)
    if (this.test.length === this.numberOfQuestions) {
      this.createTest(this.test)
    }
  }

  addQuestion(): void{
    // this.numberOfQuestions++
    this.countQuestions.push(1)
    // console.log([].constructor(this.numberOfQuestions))
    console.log(this.countQuestions)
  }

  createTest(createdTest: CreatedQuestion[]): void {
    if (this.authService.userEmail) {
      const test: CreatedTest = {
        userEmail: this.authService.userEmail,
        testDto: {
          title: this.title,
          questions: createdTest
        }
      }
      this.testService.createTest(test).subscribe((response) => this.num = response)
    }
  }

  v(r: number) {
    console.log(r)
    // this.countQuestions.slice(r, 1)
    console.log(this.countQuestions.slice(r + 1, r + 2))
  }
}
