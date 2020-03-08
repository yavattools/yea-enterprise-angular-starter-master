import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AccountInfo, SignInParam } from '../model';
import { Router } from '@angular/router';

import * as fromActions from './actions';
import * as fromReducers from './reducers';
import * as fromSelectors from './selectors';

@Injectable({ providedIn: 'root' })
export class AuthStoreFacade {
  loginProgress$ = this.store.pipe(
    select(fromSelectors.getAuthorizationIsLoading)
  );
  loginUser$ = this.store.pipe(select(fromSelectors.getLoginUserProfile));
  loginUserStaffProfile$ = this.store.pipe(
    select(fromSelectors.getLoginUserStaffProfile)
  );
  loginUserUnitProfile$ = this.store.pipe(
    select(fromSelectors.getLoginUserUnitProfile)
  );
  loginUserAccount$ = this.store.pipe(
    select(fromSelectors.getLoginUserAccount)
  );
  loginError$ = this.store.pipe(select(fromSelectors.getAuthError));
  authenticated$ = this.store.pipe(select(fromSelectors.getAuthenticated));
  isChildProfileActive: boolean = false;

  account: AccountInfo;
  userName: string = '';

  constructor(
    private store: Store<fromReducers.AuthReducerState>,
    private router: Router
  ) {
    this.loginUserAccount$.subscribe((loginAccount: any) => {
      // console.log(`Subscribe event for loginUser$ fired: counter=${x}`);
      this.account = loginAccount;
    });
  }

  getUserName() {
    return this.userName;
  }

  login(signinParam: SignInParam) {
    this.store.dispatch(new fromActions.LoginAction(signinParam));
  }

  gotoLogin() {
    // this.router.navigateByUrl('/auth/login');
    this.store.dispatch(new fromActions.LoginRedirectAction());
  }

  gotoLogOut() {
    this.store.dispatch(new fromActions.LogoutAction());
  }
}
