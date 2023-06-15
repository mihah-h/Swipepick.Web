import {Component, QueryList, ViewChildren} from '@angular/core';
import {CreatedQuestion, CreatedTest} from "../shared/interfaces/test-interfaces";
import {Observable, Subject} from "rxjs";
import {FormControl, Validators} from "@angular/forms";
import {QuestionComponent} from "../shared/components/question/question.component";
import {TestApiService} from "../shared/services/test-api.service";
import {AuthApiService} from "../shared/services/auth-api.service";

@Component({
  selector: 'app-creating-survey-page',
  templateUrl: './creating-survey-page.component.html',
  styleUrls: ['./creating-survey-page.component.css']
})
export class CreatingSurveyPageComponent {
  // survey: CreatedQuestion[] = []
  // savingQuestions$!: Subject<void>
  // createdSurveyId!: string
  // title!: FormControl
  // numberOfSurvey = [1]
  //
  // @ViewChildren('question')
  // questionComponents!: QueryList<QuestionComponent>
  //
  // constructor(
  //   private testService: TestApiService,
  //   private authService: AuthApiService
  // ) {}
  //
  // ngOnInit(): void {
  //   this.title = new FormControl(null, [Validators.required])
  //   this.savingQuestions$ = new Subject()
  // }
  //
  // get savingQuestionsObservable$(): Observable<void> {
  //   return this.savingQuestions$.asObservable()
  // }
  //
  // saveQuestion(createdQuestion: CreatedQuestion): void{
  //   this.survey.push(createdQuestion)
  //   if (this.survey.length === this.numberOfSurvey.length) {
  //     this.createTest(this.survey)
  //   }
  // }
  //
  // addQuestion(): void{
  //   this.numberOfSurvey.push(this.numberOfSurvey[this.numberOfSurvey.length - 1] + 1)
  //   console.log(this.questionComponents)
  // }
  //
  // createTest(createdTest: CreatedQuestion[]): void {
  //   if (this.authService.userEmail) {
  //     const test: CreatedTest = {
  //       userEmail: this.authService.userEmail,
  //       testDto: {
  //         title: this.title.value,
  //         questions: createdTest
  //       }
  //     }
  //     console.log(test)
  //     this.testService.createTest(test).subscribe((response) => this.createdSurveyId = response)
  //   }
  // }
  //
  // del(r: number) {
  //   this.numberOfSurvey.splice(r, 1)
  // }
  //
  // validation() {
  //   if (this.title.valid) {
  //     for (let questionComponent of this.questionComponents['_results']) {
  //       if (questionComponent['questionForm']['invalid']) {
  //         return true
  //       }
  //     }
  //     return false
  //   }
  //   return true
  // }
  //
  // downLoadQRCode() {
  //   const fileNameToDownload = 'qrcode_swipepick';
  //   // @ts-ignore
  //   const base64Img = document.getElementsByClassName('coolQRCode')[0].children[0]['src'];
  //   fetch(base64Img)
  //     .then(res => res.blob())
  //     .then((blob) => {
  //       const url = window.URL.createObjectURL(blob);
  //       const link = document.createElement('a');
  //       link.href = url;
  //       link.download = fileNameToDownload;
  //       link.click();
  //     })
  // }
  //
  // async copyQRCode() {
  //   // @ts-ignore
  //   const imgURL = document.getElementsByClassName('coolQRCode')[0].children[0]['src'];
  //   const data = await fetch(imgURL)
  //   const blob = await data.blob()
  //
  //   await navigator.clipboard.write([
  //     new ClipboardItem({
  //       [blob.type]: blob
  //     })
  //   ])
  // }
}
