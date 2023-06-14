import { Component } from '@angular/core';
import {AuthApiService} from "../../services/auth-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrls: ['../../../start-page/start-page.component.css']
})
export class ProfileLayoutComponent {

  navbarOpen = false

  constructor(
    public auth: AuthApiService,
  ) {}

  logOut() {
    this.auth.logout()
  }
}
