import * as authActions from '../actions/auth.actions';
import { State } from '@ngrx/store';
import { AccountInfo, AuthStateData } from '../../model';
// import { AppState } from '@app/store';

export const authInitialState: AuthStateData = {
  accountInfo: new AccountInfo(),
  authenticated: false,
  loading: false,
  loaded: false,
  error: null
};

export function authReducer(
  state: AuthStateData = authInitialState,
  action: authActions.AuthActions
): AuthStateData {
  switch (action.type) {
    case authActions.LOGIN: {
      console.log('Api Call Success');
      return Object.assign({}, state, {
        loading: true,
        error: null
      });
    }

    case authActions.GET_ACCOUNT_INFO_SUCCESS: {
      console.log('Api Call Success');
      const uAccountInfo: AccountInfo = Object.assign({}, state.accountInfo);
      uAccountInfo.loginInfo = {
        loginUser: Object.assign({}, action.profile),
        currentUser: Object.assign({}, action.profile)
      };
      const uState: any = Object.assign({}, state, {
        accountInfo: uAccountInfo,
        authenticated: action.profile != null,
        // loading: false,
        error: null
      });

      return uState;
    }

    case authActions.GET_EMPLOYEE_PROFILE_SUCCESS: {
      console.log('Api Call Success');
      const uAccountInfo: AccountInfo = Object.assign({}, state.accountInfo);
      uAccountInfo.loginUserStaffProfile = Object.assign({}, action.eprofile);

      const uState: any = Object.assign({}, state, {
        accountInfo: uAccountInfo,
        error: null
      });

      return uState;
    }

    case authActions.LOGIN_ERROR: {
      return Object.assign({}, state, {
        error: action.payload,
        authenticated: false,
        loading: false
      });
    }

    case authActions.LOGOUT_CONFIRMED: {
      // alert('Alert confirmed - reducer');
      return Object.assign({}, state, {
        userData: null,
        authenticated: false,
        loading: false
      });
    }

    case authActions.LOGOUT: {
      return Object.assign({}, state, {
        userData: null,
        authenticated: false,
        loading: false
      });
    }

    default: {
      return state;
    }
  }
}

export const getLoginUserAccount = (state: AuthStateData) => state.accountInfo;
export const getLoginUserProfile = (state: AuthStateData) =>
  state.accountInfo.loginInfo.loginUser;
export const getLoginUserStaffProfile = (state: AuthStateData) =>
  state.accountInfo.loginUserStaffProfile;
export const getLoginUserUnitProfile = (state: AuthStateData) =>
  state.accountInfo.loginUserUnitProfile;
export const getIsUserLoggedIn = (state: AuthStateData) => state.authenticated;
export const getError = (state: AuthStateData) => state.error;
export const getAuthorizationIsLoading = (state: AuthStateData) =>
  state.loading;
