import { Component } from '@angular/core';
import {AuthApiService} from "../shared/services/auth-api.service";

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent {
 constructor(public auth: AuthApiService) {

 }
}
