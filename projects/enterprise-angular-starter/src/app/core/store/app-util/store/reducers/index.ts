import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromAppContextModel from '../../model';
import * as fromAppContextReducer from './app-context.reducer';


export const appContextReducers: ActionReducerMap<fromAppContextReducer.AppContextReducerState> = {
  appContextDataState: fromAppContextReducer.appContextDataReducer
};

export const selectorAppContextDataState = createFeatureSelector<fromAppContextReducer.AppContextReducerState>(fromAppContextModel.APP_CONTEXT_KEY); 
export * from './app-context.reducer';