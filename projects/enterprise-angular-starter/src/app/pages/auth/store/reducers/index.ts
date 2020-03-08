import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromAuth from './auth.reducer';
import { AppState } from '@app/core/store/app-root';
import { AUTH_KEY, AuthStateData } from '../../model';

export const getAuthState = createFeatureSelector<State, AuthReducerState>(
  AUTH_KEY
);

export const reducers: ActionReducerMap<AuthReducerState> = {
  auth: fromAuth.authReducer
};

export interface AuthReducerState {
  auth: AuthStateData;
}

export interface State extends AppState {
  auth: AuthStateData;
}
