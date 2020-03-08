import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';

import { Injectable } from '@angular/core';
import { AppConstantsService } from '../../../providers/constants/app-constants.service';
import { throwError } from 'rxjs';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '../../../providers/local-storage';
import { HttpWrapperService } from '../../../providers/http-wrapper/http-wrapper.service';

// @Injectable({ providedIn: AppContextStoreModule })
@Injectable()
export class AppCommonDataService {
  private actionUrl: string;

  constructor(
    private http: HttpClient,
    private appConstants: AppConstantsService
  ) {}

  loadUnitNames(): Observable<any> {
    const url =
      this.appConstants.BASE_API_URL + this.appConstants.LOAD_UNIT_NAMES;
    console.log('app Init: load unit names call');

    return this.http.get(url).pipe(catchError(this.handleError));
  }

  loadDivisons(): Observable<any> {
    const url =
      this.appConstants.BASE_API_URL + this.appConstants.LOAD_DIVISONS;
    console.log('app Init: load unit names call');

    return this.http.get(url).pipe(catchError(this.handleError));
  }

  loadCurrencyTypes(): Observable<any> {
    const url =
      this.appConstants.BASE_API_URL + this.appConstants.LOAD_CURRENCY_TYPES;
    console.log('app Init: load currency types call');

    return this.http.get(url).pipe(catchError(this.handleError));
  }

  loadESHeadItems(): Observable<any> {
    const url =
      this.appConstants.BASE_API_URL + this.appConstants.LOAD_ES_HEADITEMS;
    console.log('app Init: load Excel Sheed Head Items');

    return this.http.get(url).pipe(catchError(this.handleError));
  }

  loadESSubHeadItems(): Observable<any> {
    const url =
      this.appConstants.BASE_API_URL + this.appConstants.LOAD_ES_SUB_HEADITEMS;
    console.log('app Init: load Excel Sheed Sub Head Items');

    return this.http.get(url).pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<never> {
    console.log('api: Error');
    return throwError(error || 'Server error');
  }
}
