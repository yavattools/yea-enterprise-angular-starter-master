import { Action } from '@ngrx/store';
import {
  AccountInfo,
  SignInParam,
  ProfileInfo,
  SignUpParam,
  EmployeeProfile
} from '../../model';

export const LOGIN = '[Auth] -LOGIN Requested-';
export const LOGIN_SUCCESS = '[Auth] -LOGIN Success-';
export const LOGIN_ERROR = '[Auth] -LOGIN Error-';

export const GET_ACCOUNT_INFO = '[Auth] -Get Account Info-';
export const GET_ACCOUNT_INFO_SUCCESS = '[Auth] -Get Account Info Success-';
export const GET_ACCOUNT_INFO_FAILURE = '[Auth] -Get Account Info Failure-';

export const GET_EMPLOYEE_PROFILE = '[Auth] -Get Employee Profile-';
export const GET_EMPLOYEE_PROFILE_SUCCESS =
  '[Auth] -Get Employee Profile Success-';
export const GET_EMPLOYEE_PROFILE_FAILURE =
  '[Auth] -Get Employee Profile Failure-';

export const LOGOUT = '[Auth] -LOGOUT Requested-';
export const LOGOUT_SUCCESS = '[Auth] -LOGOUT Success-';
export const LOGOUT_ERROR = '[Auth] -LOGOUT Error-';

export const SIGNUP = '[Auth] -SIGNUP Requested-';
export const SIGNUP_SUCCESS = '[Auth] -SIGNUP Success-';
export const SIGNUP_ERROR = '[Auth] -SIGNUP Error-';

export const LOGIN_SCREEN_SHOW = '[Auth] -LOGIN Screen Show Requested-';
export const LOGIN_REDIRECT = '[Auth] -LOGIN Redirect';

export const LOGOUT_SCREEN_SHOW = '[Auth] -LOGOUT Screen Show Requested-';
export const LOGOUT_CONFIRM_REQUEST = '[Auth] -LOGOUT COnfirmation Requested-';
export const LOGOUT_CONFIRMED = '[Auth] -LOGOUT Confirmed-';
export const LOGOUT_CANCEL = '[Auth] -LOGOUT Cancelled-';

export const SIGNUP_SCREEN_SHOW = '[Auth] -SIGNUP Screen Show-';

export class SignupScreenShowAction implements Action {
  public readonly type = SIGNUP_SCREEN_SHOW;

  constructor() {}
}

export class LoginScreenShowAction implements Action {
  public readonly type = LOGIN_SCREEN_SHOW;

  constructor() {}
}

export class LoginRedirectAction implements Action {
  public readonly type = LOGIN_REDIRECT;

  constructor() {
    console.log('Login Redirect action object created..');
  }
}

export class LogoutScreenShowAction implements Action {
  public readonly type = LOGOUT_SCREEN_SHOW;

  constructor() {}
}

export class LogoutConfirmRequestedAction implements Action {
  public readonly type = LOGOUT_CONFIRM_REQUEST;
}

export class LogoutConfirmedAction implements Action {
  public readonly type = LOGOUT_CONFIRMED;
}

export class LogoutCancelledAction implements Action {
  public readonly type = LOGOUT_CANCEL;
}

export class LoginAction implements Action {
  public readonly type = LOGIN;

  constructor(public signInParam: SignInParam) {}
}

export class LoginSuccessAction implements Action {
  public readonly type = LOGIN_SUCCESS;

  constructor(public profile: ProfileInfo) {}
}

export class LoginErrorAction implements Action {
  public readonly type = LOGIN_ERROR;

  constructor(public payload: any) {}
}

export class LogoutAction implements Action {
  public readonly type = LOGOUT;

  constructor() {}
}

export class LogoutSuccessAction implements Action {
  public readonly type = LOGOUT_SUCCESS;

  constructor(public user: ProfileInfo) {}
}

export class LogoutErrorAction implements Action {
  public readonly type = LOGOUT_ERROR;

  constructor(public payload: any) {}
}

export class SignUpRequestedAction implements Action {
  public readonly type = SIGNUP;

  constructor(public signUp: SignUpParam) {}
}

export class SignUpSuccessAction implements Action {
  public readonly type = SIGNUP_SUCCESS;

  constructor(public signup: SignUpParam) {}
}

export class GetAccountDetailsAction implements Action {
  public readonly type = GET_ACCOUNT_INFO;

  constructor() {}
}

export class GetAccountDetailsSuccessAction implements Action {
  public readonly type = GET_ACCOUNT_INFO_SUCCESS;

  constructor(public profile: ProfileInfo) {}
}

export class GetAccountDetailsFailureAction implements Action {
  public readonly type = GET_ACCOUNT_INFO_FAILURE;

  constructor(error: any) {}
}

export class GetEmployeeProfileAction implements Action {
  public readonly type = GET_EMPLOYEE_PROFILE;

  constructor(public id: any) {}
}

export class GetEmployeeProfileSuccessAction implements Action {
  public readonly type = GET_EMPLOYEE_PROFILE_SUCCESS;

  constructor(public eprofile: EmployeeProfile) {}
}

export class GetEmployeeProfileFailureAction implements Action {
  public readonly type = GET_EMPLOYEE_PROFILE_FAILURE;

  constructor(error: any) {}
}

export type AuthActions =
  | SignupScreenShowAction
  | LoginScreenShowAction
  | LogoutConfirmRequestedAction
  | LogoutConfirmedAction
  | LogoutCancelledAction
  | LogoutScreenShowAction
  | LoginRedirectAction
  | LoginAction
  | LoginSuccessAction
  | LoginErrorAction
  | LogoutAction
  | LogoutSuccessAction
  | LogoutErrorAction
  | GetAccountDetailsAction
  | GetAccountDetailsSuccessAction
  | GetAccountDetailsFailureAction
  | GetEmployeeProfileAction
  | GetEmployeeProfileSuccessAction
  | GetEmployeeProfileFailureAction
  | SignUpRequestedAction
  | SignUpSuccessAction;
