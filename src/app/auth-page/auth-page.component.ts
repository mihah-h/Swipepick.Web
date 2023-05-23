import {Component, OnInit} from '@angular/core';
import {AuthApiService} from "../shared/services/auth-api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserLogin, UserLoginResponse, UserRegister} from "../shared/interfaces/auth-interfaces";

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit{

  isLogin: boolean = true

  loginForm!: FormGroup
  registrationForm!: FormGroup
  submitted = false


  constructor(
    private auth: AuthApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      emailLogin: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      passwordLogin: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    })

    this.registrationForm = new FormGroup({
      emailRegister: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      passwordRegister: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      nameRegister: new FormControl(null, [
        Validators.required
      ]),
      lastnameRegister: new FormControl(null, [
        Validators.required
      ])
    })
  }


  loginSubmit() {
    if (this.loginForm.invalid) {
      return
    }

    this.submitted = true

    const user: UserLogin = {
      email: this.loginForm.value.emailLogin,
      password: this.loginForm.value.passwordLogin
    }

    this.auth.login(user).subscribe(() => {
      this.loginForm.reset()
      this.submitted = false
      this.router.navigate(['/'])
    }, (r) => {
      console.log(r)
      this.submitted = false
    })
  }

  registerSubmit() {
    if (this.registrationForm.invalid) {
      return
    }

    const user: UserRegister = {
      email: this.registrationForm.value.emailRegister,
      password: this.registrationForm.value.passwordRegister,
      name: this.registrationForm.value.nameRegister,
      lastname: this.registrationForm.value.lastnameRegister
    }

    this.auth.register(user).subscribe(() => {
      this.submitted = false
      const userLogin: UserLogin = {
        email: user.email,
        password: user.password
      }
      this.auth.login(userLogin).subscribe(() =>
        this.router.navigate(['/'])
      )
      this.registrationForm.reset()

    }, () => {
      this.submitted = false
    })
  }

  replaceForm(isLoginButton: boolean) {
    this.isLogin = isLoginButton
    if (isLoginButton) {
      this.registrationForm.reset()
    } else {
      this.loginForm.reset()
    }
  }
}
