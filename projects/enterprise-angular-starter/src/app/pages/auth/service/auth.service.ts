import { SignUpParam } from './../model/signup.model';
import { SignInParam } from './../model/auth.model';
import { AccountInfo } from './../model/user';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AppConstantsService } from '@app/core/providers/constants';
import { throwError } from 'rxjs';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { HttpWrapperService, LocalStorageService } from '@app/core/providers';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private actionUrl: string;

  constructor(
    private http: HttpWrapperService,
    private appConstants: AppConstantsService,
    private localStorageService: LocalStorageService
  ) {}

  signIn(user: SignInParam): Observable<any> {
    const url: string =
      this.appConstants.BASE_API_URL + this.appConstants.SIGN_IN_URL;
    console.log('sign: api call : ' + url + ' username; ' + user.username);
    return this.http.post<any>(url, user).pipe(catchError(this.handleError));
  }

  getAccountInfo(): Observable<any> {
    const url: string =
      this.appConstants.BASE_API_URL + this.appConstants.GET_ACCOUNT_INFO_URL;
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  getEmployeeProfile(id: any): Observable<any> {
    const url: string =
      this.appConstants.BASE_API_URL +
      this.appConstants.GET_EMPLOYEE_PROFILE_URL +
      '/' +
      id;
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  signOut(): Observable<any> {
    return this.http
      .get<any[]>(this.actionUrl)
      .pipe(catchError(this.handleError));
  }

  signUp(signup: SignUpParam) {
    // return this.fromFirebaseAuthPromise(
    //     this.af.auth.createUser({ ...user })
    // );
  }

  private handleError(error: any): Observable<never> {
    console.log('api: Error');
    return throwError(error || 'Server error');
  }
}
