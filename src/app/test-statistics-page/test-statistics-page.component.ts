import {Component, OnInit} from '@angular/core';
import {TestStatistic} from "../shared/interfaces/test-interfaces";
import {ActivatedRoute, Params, Route, Router} from "@angular/router";
import {Observable, switchMap} from "rxjs";
import {TestApiService} from "../shared/services/test-api.service";

@Component({
  selector: 'app-test-statistics-page',
  templateUrl: './test-statistics-page.component.html',
  styleUrls: ['./test-statistics-page.component.css']
})
export class TestStatisticsPageComponent implements OnInit{

  isStudentsStatistic = true

  testStatistics!: TestStatistic
  testStatistics$!: Observable<TestStatistic>

  testId!: string

  search = ''
  searchQuestion = ''

  studentSortParam = 'new'
  questionSortParam = 'standard'

  constructor(
    private route: ActivatedRoute,
    private testService: TestApiService
  ) {}

  ngOnInit(): void {
    this.testStatistics$ = this.route.params
      .pipe(switchMap((params: Params) => {
        this.testId = params['id']
        return this.testService.getTestStatistic(this.testId)
      }))

    this.testStatistics$.subscribe(testStatistics => this.testStatistics = testStatistics)
  }
}
