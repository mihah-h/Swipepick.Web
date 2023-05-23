import {Inject, Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, tap} from "rxjs";
import {UserLogin, UserLoginResponse, UserRegister} from "../interfaces/auth-interfaces";
import {SelectedResponses, Question, SelectedResponse, CreatedTest} from "../interfaces/test-interfaces";
import {AuthApiService} from "./auth-api.service";

@Injectable()
export class TestApiService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private authService: AuthApiService) {}

  get header(): any {
    if (this.authService.token) {
      return new HttpHeaders({
        'Authorization': `Bearer ${this.authService.token}`
      })
    }
  }

  getTest(id: string): Observable<Question[]> {
    console.log(id)
    return this.http.get<Question[]>(`https://swipepick.somee.com/api/tests/${id}`)
  }

  submitAnswers(answers: SelectedResponses): Observable<any>{
    return this.http.post('https://swipepick.somee.com/api/tests/submit-answers', answers)
  }

  createTest(createdTest: CreatedTest): Observable<string>{
    return this.http.post('https://swipepick.somee.com/api/tests/create', createdTest,
      {headers: this.header, responseType: "text"})
  }

}



