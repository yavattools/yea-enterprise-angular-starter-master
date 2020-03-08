import { Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { AppContextActions } from './actions/app-context.actions';

import * as fromActions from './actions';
import * as fromReducers from './reducers';
import * as fromSelectors from './selectors';
import * as fromAppContextReducer from './reducers/app-context.reducer';
import { AppContext } from '../model';

@Injectable()
export class AppContextStoreFacade {
  unitNames$ = this.store.pipe(select(fromSelectors.getUnitNames));
  divisons$ = this.store.pipe(select(fromSelectors.getDivisons));
  months$ = this.store.pipe(select(fromSelectors.getMonths));
  esHeadItems$ = this.store.pipe(select(fromSelectors.getESHeaditems));
  esSubHeadItems$ = this.store.pipe(select(fromSelectors.getESSubHeadItems));

  currencyTypes$ = this.store.pipe(select(fromSelectors.getCurrencyTypes));
  appActionInProgress$ = this.store.pipe(
    select(fromSelectors.getAppActionInProgress)
  );

  constructor(
    private store: Store<fromAppContextReducer.AppContextReducerState>
  ) {}

  init() {
    this.loadUnitNames();
    this.loadESHeadItems();
    this.loadESSubHeadItems();
    this.loadDivisons();
  }

  loadUnitNames() {
    this.store.dispatch(new fromActions.AppContextLoadUnitNames());
  }

  loadDivisons() {
    this.store.dispatch(new fromActions.AppContextLoadDivisons());
  }

  loadCurrencyTypes() {
    this.store.dispatch(new fromActions.AppContextLoadCurrencyTypes());
  }

  showAppActionInProgress() {
    this.store.dispatch(new fromActions.AppContextShowActionInProgressAction());
  }

  hideAppActionInProgress() {
    this.store.dispatch(new fromActions.AppContextHideActionInProgressAction());
  }

  loadESHeadItems() {
    this.store.dispatch(new fromActions.ExcelSheetLoadHeadItems());
  }

  loadESSubHeadItems() {
    this.store.dispatch(new fromActions.ExcelSheetLoadSubHeadItems());
  }
}
