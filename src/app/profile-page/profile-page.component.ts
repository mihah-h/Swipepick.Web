import { Component } from '@angular/core';
import {AuthApiService} from "../shared/services/auth-api.service";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {
  constructor(public auth: AuthApiService) {

  }
}
