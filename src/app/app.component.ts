import {Component, OnInit} from '@angular/core';
import {AuthApiService} from "./shared/services/auth-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{

  constructor(private auth: AuthApiService) {}

  ngOnInit() {
    // this.auth.autoLogin(localStorage.getItem('token')).subscribe()
  }

}
