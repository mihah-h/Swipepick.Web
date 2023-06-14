import {Component, OnInit} from '@angular/core';
import {AuthApiService} from "../shared/services/auth-api.service";
import {TestApiService} from "../shared/services/test-api.service";
import {QuestionStatistic, TestsList, TooltipInformation} from "../shared/interfaces/test-interfaces";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit{

  testsList!: TestsList

  showsTooltip = false
  questionStatistic!: QuestionStatistic
  topPosition!: number | null
  leftPosition!: number | null
  questionNumber!: number

  searchText: string = ''
  sortParam: string = 'new'

  isTests: boolean = true

  constructor(
    public auth: AuthApiService,
    public testServices: TestApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.testServices.getTestsList().subscribe(testsList => {
      this.testsList = testsList
      console.log(testsList)
    })
  }

  onHover(tooltipInformation: TooltipInformation) {
    this.showsTooltip = true;
    this.topPosition = tooltipInformation.$event.clientY;
    this.leftPosition = tooltipInformation.$event.clientX;
    this.questionStatistic = tooltipInformation.questionStatistic
    this.questionNumber = tooltipInformation.questionNumber
  }
  onMouseout() {
    this.showsTooltip = false;
    this.topPosition = null;
    this.leftPosition = null;
  }

  deleteTest(testNumber: number) {
    this.testsList.tests.splice(testNumber, 1)
  }

  createTest() {
    this.router.navigate(['/profile', 'creating'])
  }
}
