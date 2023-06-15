import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QuestionStatistic, Test, TestsList, TooltipInformation} from "../../interfaces/test-interfaces";
import {TestApiService} from "../../services/test-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{

  @Input()
  test!: Test
  @Input()
  testNumber!: number
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
  }


  getQuestionStatisticsWidth() {
    const statisticsBlockWidth = 550
    return (statisticsBlockWidth - ((this.test.questionStatistics.length - 1) * 4)) / this.test.questionStatistics.length
  }

  openStatistic() {
    this.router.navigate(['/profile', 'test-statistics', this.test.uniqueCode])
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
    navigator.clipboard.writeText(this.test.uniqueCode);
  }

  copyLink() {
    navigator.clipboard.writeText('https://swipepick-kolchin031.b4a.run/test/' + this.test.uniqueCode);
  }


  deleteTest() {
    this.testService.deleteTest(this.test.uniqueCode).subscribe(() => this.deleteTestEvent.next())
  }
}
