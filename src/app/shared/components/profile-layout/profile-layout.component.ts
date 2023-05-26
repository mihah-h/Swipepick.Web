import { Component } from '@angular/core';
import {AuthApiService} from "../../services/auth-api.service";

@Component({
  selector: 'app-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrls: ['../../../start-page/start-page.component.css']
})
export class ProfileLayoutComponent {

  constructor(public auth: AuthApiService) {}
}
