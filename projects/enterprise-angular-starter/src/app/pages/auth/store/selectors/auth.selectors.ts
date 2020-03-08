import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromAuth from '../reducers/auth.reducer';

export const selectAuthState = createSelector(
  fromFeature.getAuthState,
  (state: fromFeature.AuthReducerState) => state.auth
);

export const getAuthError = createSelector(
  selectAuthState,
  fromAuth.getError
);

export const getAuthorizationIsLoading = createSelector(
  selectAuthState,
  fromAuth.getAuthorizationIsLoading
);

export const getLoginUserAccount = createSelector(
  selectAuthState,
  fromAuth.getLoginUserAccount
);
export const getLoginUserProfile = createSelector(
  selectAuthState,
  fromAuth.getLoginUserProfile
);
export const getLoginUserStaffProfile = createSelector(
  selectAuthState,
  fromAuth.getLoginUserStaffProfile
);
export const getLoginUserUnitProfile = createSelector(
  selectAuthState,
  fromAuth.getLoginUserUnitProfile
);

export const getAuthenticated = createSelector(
  selectAuthState,
  fromAuth.getIsUserLoggedIn
);
