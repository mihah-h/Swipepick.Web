import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import { BeginPageComponent } from './begin-page/begin-page.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { StartPageComponent } from './start-page/start-page.component';
import {AppRoutingModule} from "./app-routing.module";
import {AuthApiService} from "./shared/services/auth-api.service";
import { TestPageComponent } from './test-page/test-page.component';
import {TestApiService} from "./shared/services/test-api.service";
import {ValidationMessageComponent} from "./shared/components/validation-message/validation-message.component";
import { CreatingTestPageComponent } from './creating-test-page/creating-test-page.component';
import { ProfileLayoutComponent } from './shared/components/profile-layout/profile-layout.component';
import { StartLayoutComponent } from './shared/components/start-layout/start-layout.component';
import { InformationPageComponent } from './information-page/information-page.component';
import { CreatingPageComponent } from './creating-page/creating-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { QuestionComponent } from './shared/components/question/question.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import {TestComponent} from "./shared/components/test/test.component";
import {DatePipe, SlicePipe} from "@angular/common";
import { QuestionTooltipComponent } from './shared/components/question-tooltip/question-tooltip.component';
import { TestSearchPipe } from './shared/pipes/testSearch.pipe';
import { TestDateSortedPipe } from './shared/pipes/test-sorted.pipe';
import { HelpPageComponent } from './help-page/help-page.component';
import { CreatingSurveyPageComponent } from './creating-survey-page/creating-survey-page.component';
import { TestStatisticsPageComponent } from './test-statistics-page/test-statistics-page.component';
import { StudentComponent } from './shared/components/student/student.component';
import { QuestionStatisticComponent } from './shared/components/question-statistic/question-statistic.component';
import { StudentSortedPipe } from './shared/pipes/student-sorted.pipe';
import { StudentSearchPipe } from './shared/pipes/student-search.pipe';
import { QuestionSortedPipe } from './shared/pipes/question-sorted.pipe';
import { QuestionSearchPipe } from './shared/pipes/question-search.pipe';
import { SurveyQuestionComponent } from './shared/components/survey-question/survey-question.component';
import { SurveyComponent } from './shared/components/survey/survey.component';

@NgModule({
  declarations: [
    AppComponent,
    BeginPageComponent,
    AuthPageComponent,
    ProfilePageComponent,
    StartPageComponent,
    TestPageComponent,
    CreatingTestPageComponent,
    ProfileLayoutComponent,
    StartLayoutComponent,
    InformationPageComponent,
    CreatingPageComponent,
    SettingsPageComponent,
    QuestionComponent,
    TestComponent,
    QuestionTooltipComponent,
    TestSearchPipe,
    TestDateSortedPipe,
    HelpPageComponent,
    CreatingSurveyPageComponent,
    TestStatisticsPageComponent,
    StudentComponent,
    QuestionStatisticComponent,
    StudentSortedPipe,
    StudentSearchPipe,
    QuestionSortedPipe,
    QuestionSearchPipe,
    SurveyQuestionComponent,
    SurveyComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
    ReactiveFormsModule,
    ValidationMessageComponent,
    NgxQRCodeModule

  ],
  providers: [AuthApiService, TestApiService, DatePipe, TestSearchPipe, TestDateSortedPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
