import { Component } from '@angular/core';
import {AuthApiService} from "../../services/auth-api.service";

@Component({
  selector: 'app-start-layout',
  templateUrl: './start-layout.component.html',
  styleUrls: ['../../../start-page/start-page.component.css']
})
export class StartLayoutComponent {

  navbarOpen = false

  constructor(public auth: AuthApiService) {
  }
}
