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
  providers: [AuthApiService, TestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
