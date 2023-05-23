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
    this.numberOfQuestions++
  }

  createTest(createdTest: CreatedQuestion[]): void {
    if (this.authService.userEmail) {
      const test: CreatedTest = {
        userEmail: this.authService.userEmail,
        testDto: {
          questions: createdTest
        }
      }
      this.testService.createTest(test).subscribe((response) => this.num = response)
    }
  }
}
