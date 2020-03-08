import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import {
  map,
  switchMap,
  catchError,
  tap,
  mergeMap,
  withLatestFrom
} from 'rxjs/operators';
import { of, empty } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { LocalStorageService } from '../../../../providers/local-storage';
import { AppCommonDataService } from '../../service/app-common-data.service';
import {
  AppContextActionTypes,
  AppContextActions,
  AppContextLoadUnitNamesSuccess,
  AppContextLoadUnitNames,
  AppContextLoadCurrencyTypes,
  AppContextLoadCurrencyTypesSuccess,
  AppContextLoadCurrencyTypesFailure,
  ExcelSheetLoadHeadItems,
  ExcelSheetLoadSubHeadItems
} from '../actions/app-context.actions';
import { AppContextReducerState } from '../reducers';

import * as appContextDataActions from '../actions';

@Injectable()
export class AppContextDataEffects {
  constructor(
    private actions$: Actions<Action>,
    private appCommonService: AppCommonDataService,
    private store: Store<AppContextReducerState>
  ) {}

  @Effect({ dispatch: false })
  loadUnitNames(): Observable<Action> {
    return this.actions$
      .pipe(ofType(AppContextActionTypes.APPCONTEXT_LOAD_UNIT_NAMES))
      .pipe(
        tap((action: AppContextLoadUnitNames) =>
          this.appCommonService.loadUnitNames().subscribe(
            unitNames => {
              console.log(unitNames);
              this.store.dispatch(
                new appContextDataActions.AppContextLoadUnitNamesSuccess(
                  unitNames
                )
              );
            },
            error => {
              this.store.dispatch(
                new appContextDataActions.AppContextLoadUnitNamesFailure(error)
              );
            }
          )
        )
      );
  }

  @Effect({ dispatch: false })
  loadDivisions(): Observable<Action> {
    return this.actions$
      .pipe(ofType(AppContextActionTypes.APPCONTEXT_LOAD_DIVISONS))
      .pipe(
        tap((action: AppContextLoadUnitNames) =>
          this.appCommonService.loadDivisons().subscribe(
            divisons => {
              console.log(divisons);
              this.store.dispatch(
                new appContextDataActions.AppContextLoadDivisonsSuccess(
                  divisons
                )
              );
            },
            error => {
              this.store.dispatch(
                new appContextDataActions.AppContextLoadDivisonsFailure(error)
              );
            }
          )
        )
      );
  }

  @Effect({ dispatch: false })
  loadCurrencyTypes(): Observable<Action> {
    return this.actions$
      .pipe(ofType(AppContextActionTypes.APPCONTEXT_LOAD_CURRENCY_TYPES))
      .pipe(
        tap((action: AppContextLoadCurrencyTypes) =>
          this.appCommonService.loadUnitNames().subscribe(
            currencyTypes => {
              console.log(currencyTypes);
              this.store.dispatch(
                new appContextDataActions.AppContextLoadCurrencyTypesSuccess(
                  currencyTypes
                )
              );
            },
            error => {
              this.store.dispatch(
                new appContextDataActions.AppContextLoadCurrencyTypesFailure(
                  error
                )
              );
            }
          )
        )
      );
  }

  @Effect({ dispatch: false })
  BalanceSheetLoadHeadItems(): Observable<Action> {
    return this.actions$
      .pipe(ofType(AppContextActionTypes.ES_LOAD_HEADITEMS))
      .pipe(
        tap((action: ExcelSheetLoadHeadItems) =>
          this.appCommonService.loadESHeadItems().subscribe(
            esHeadItems => {
              console.log(esHeadItems);
              this.store.dispatch(
                new appContextDataActions.ExcelSheetLoadHeadItemsSuccess(
                  esHeadItems
                )
              );
            },
            error => {
              this.store.dispatch(
                new appContextDataActions.ExcelSheetLoadHeadItemsFailure(error)
              );
            }
          )
        )
      );
  }

  @Effect({ dispatch: false })
  BalanceSheetLoadSubHeadItems(): Observable<Action> {
    return this.actions$
      .pipe(ofType(AppContextActionTypes.ES_LOAD_SUB_HEADITEMS))
      .pipe(
        tap((action: ExcelSheetLoadSubHeadItems) =>
          this.appCommonService.loadESSubHeadItems().subscribe(
            esSubHeadItems => {
              console.log(esSubHeadItems);
              this.store.dispatch(
                new appContextDataActions.ExcelSheetLoadSubHeadItemsSuccess(
                  esSubHeadItems
                )
              );
            },
            error => {
              this.store.dispatch(
                new appContextDataActions.ExcelSheetLoadSubHeadItemsFailure(
                  error
                )
              );
            }
          )
        )
      );
  }
}
