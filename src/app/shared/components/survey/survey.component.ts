import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Survey, Test, TooltipInformation} from "../../interfaces/test-interfaces";
import {TestApiService} from "../../services/test-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit{
  @Input()
  survey!: Survey
  @Input()
  surveyNumber!: number
  @Output()
  mouseoverEvent = new EventEmitter<TooltipInformation>()
  @Output()
  mouseoutEvent = new EventEmitter<void>()
  @Output()
  deleteTestEvent = new EventEmitter<void>()

  questionStatisticsWidth!: number

  constructor(
    private testService: TestApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.questionStatisticsWidth = this.getQuestionStatisticsWidth()
    console.log(this.questionStatisticsWidth)
  }


  getQuestionStatisticsWidth() {
    const statisticsBlockWidth = 550
    return (statisticsBlockWidth - ((this.survey.questionStatistics.length - 1) * 4)) / this.survey.questionStatistics.length
  }

  openStatistic() {
    this.router.navigate(['/profile', 'test-statistics', this.survey.uniqueCode])
  }

  downLoadQRCode() {
    const fileNameToDownload = 'qrcode_swipepick';
    // @ts-ignore
    const base64Img = document.getElementsByClassName('coolQRCode')[this.testNumber].children[0]['src'];
    fetch(base64Img)
      .then(res => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileNameToDownload;
        link.click();
      })
  }

  copyTestId() {
    navigator.clipboard.writeText(this.survey.uniqueCode);
  }

  copyLink() {
    navigator.clipboard.writeText('https://swipepick-kolchin031.b4a.run/test/' + this.survey.uniqueCode);
  }


  deleteTest() {
    this.testService.deleteTest(this.survey.uniqueCode).subscribe(() => this.deleteTestEvent.next())
  }
}
