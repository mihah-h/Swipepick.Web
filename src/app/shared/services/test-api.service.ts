import {Inject, Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, tap} from "rxjs";
import {UserLogin, UserLoginResponse, UserRegister} from "../interfaces/auth-interfaces";
import {
  SelectedResponses,
  Question,
  SelectedResponse,
  CreatedTest,
  TestsList,
  TestStatistic, Surveys
} from "../interfaces/test-interfaces";
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

  getTestsList(): Observable<TestsList> {
    return this.http.get<TestsList>('https://swipepick.somee.com/api/tests',
      {headers: this.header})
  }

  deleteTest(id: string) {
    return this.http.delete(`https://swipepick.somee.com/api/tests/${id}`,
      {headers: this.header})
  }

  getTestStatistic(id: string): Observable<TestStatistic> {
    return this.http.get<TestStatistic>(`https://swipepick.somee.com/api/tests/test-statistic/${id}`,
      {headers: this.header})
  }

  getSurveys(): Observable<Surveys> {
    return this.http.get<Surveys>('https://swipepick.somee.com/api/tests/surveys',
      {headers: this.header})
  }

}



