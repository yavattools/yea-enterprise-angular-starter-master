import { AppState } from '@app/core/store/app-root';
import { AccountInfo } from './user';

export const AUTH_KEY = 'auth';

export interface AuthStateData {
  accountInfo: AccountInfo;
  authenticated: boolean;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export interface State extends AppState {
  account: AuthStateData;
}

export class SignInInfo {
  public username?: any;
  public password?: any;
  public status?: any;
  public token?: any;

  constructor() {}
}

/*  API specific objects */
export class SignInParam {
  public username?: any;
  public password?: any;

  constructor() {}
}
