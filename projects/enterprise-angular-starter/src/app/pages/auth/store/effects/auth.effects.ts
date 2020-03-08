import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AuthReducerState, getAuthState } from '../reducers';
import * as fromAuth from '../reducers/auth.reducer';
import * as fromAuthFeature from '../reducers';
import {
  map,
  switchMap,
  catchError,
  tap,
  mergeMap,
  withLatestFrom
} from 'rxjs/operators';
import { of, empty, Observable } from 'rxjs';

import { Action, Store, select } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ActivatedRoute } from '@angular/router';

import * as authActions from '../actions';
import { AuthService } from './../../service/auth.service';
import { LogoutPromptComponent } from '../../view/presentational';
import { LocalStorageService, AppConstantsService } from '@app/core/providers';
import { YeaSnackBarService } from '@app/core/utilities/snackbar';
import {
  UserIdleService,
  UserIdleWatchService
} from '@app/pages/auth/view/provider';

@Injectable()
export class AuthEffects {
  constructor(
    private authService: AuthService,
    private constantService: AppConstantsService,
    private router: Router,
    private snakbarService: YeaSnackBarService,
    private store: Store<AuthReducerState>,
    private dialogService: MatDialog,
    private _userIdleWatch: UserIdleWatchService,
    private actions$: Actions,
    private localStorageService: LocalStorageService,
    private route: ActivatedRoute
  ) {}

  @Effect()
  login$ = this.actions$
    .pipe(ofType<authActions.LoginAction>(authActions.LOGIN))
    .pipe(
      map((action: authActions.LoginAction) => action.signInParam),
      switchMap(auth => {
        return this.authService.signIn(auth).pipe(
          map(user => new authActions.LoginSuccessAction(user)),
          catchError(error => of(new authActions.LoginErrorAction(error)))
        );
      })
    );

  @Effect({ dispatch: false })
  getAccountSuccess$ = this.actions$
    .pipe(
      ofType<authActions.GetAccountDetailsSuccessAction>(
        authActions.GET_ACCOUNT_INFO_SUCCESS
      )
    )
    .pipe(
      tap(() => {
        this.router.navigateByUrl('/pages/dashboard');
      })
    );

  @Effect({ dispatch: false })
  getAccountError$ = this.actions$
    .pipe(
      ofType<authActions.GetAccountDetailsFailureAction>(
        authActions.GET_ACCOUNT_INFO_FAILURE
      )
    )
    .pipe(
      tap(() => {
        this.snakbarService.openSnackBar(
          'Getting Account details Failed, please try again!',
          this.constantService.snackbarType.ERROR,
          2000
        );
        //this.router.navigateByUrl('/dashboard')
      })
    );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$
    .pipe(ofType<authActions.LoginSuccessAction>(authActions.LOGIN_SUCCESS))
    .pipe(
      tap(() => {
        console.log('Login Success');
        this.store.dispatch(new authActions.GetAccountDetailsAction());
        // this.router.navigateByUrl('/dashboard');
      })
    );

  @Effect({ dispatch: false })
  loginError$ = this.actions$
    .pipe(ofType<authActions.LoginErrorAction>(authActions.LOGIN_ERROR))
    .pipe(
      tap(() => {
        this.snakbarService.openSnackBar(
          'Login Failed, please try again!',
          this.constantService.snackbarType.ERROR,
          2000
        );
        //this.router.navigateByUrl('/dashboard')
      })
    );

  @Effect({ dispatch: false })
  logout$ = this.actions$
    .pipe(ofType<authActions.LogoutAction>(authActions.LOGOUT))
    .pipe(
      switchMap(auth =>
        this.authService.signOut().pipe(
          map(() => {
            this.store.dispatch(new authActions.LogoutConfirmedAction());
            // this.router.navigateByUrl('/auth/login');
          }),
          catchError(() => of(new authActions.LogoutCancelledAction()))
        )
      )
    );

  @Effect()
  logoutConfirmation$ = this.actions$
    .pipe(
      ofType<authActions.LogoutConfirmRequestedAction>(
        authActions.LOGOUT_CONFIRM_REQUEST
      )
    )
    .pipe(
      switchMap(() =>
        this.dialogService
          .open(LogoutPromptComponent)
          .afterClosed()
          .pipe(
            map(confirmed => {
              if (confirmed) {
                return new authActions.LogoutAction();
              } else {
                return new authActions.LogoutCancelledAction();
              }
            })
          )
      )
    );

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$
    .pipe(ofType<authActions.LoginRedirectAction>(authActions.LOGIN_REDIRECT))
    .pipe(
      tap(() => {
        this.router.navigateByUrl('/pages/auth');
      })
    );

  @Effect({ dispatch: false })
  getAccountInfo(): Observable<Action> {
    return this.actions$.pipe(ofType(authActions.GET_ACCOUNT_INFO)).pipe(
      tap((action: authActions.GetAccountDetailsAction) =>
        this.authService.getAccountInfo().subscribe(
          (accountInfo: any) => {
            console.log(accountInfo);
            this.store.dispatch(
              new authActions.GetEmployeeProfileAction(accountInfo.id)
            );

            this.store.dispatch(
              new authActions.GetAccountDetailsSuccessAction(accountInfo)
            );
          },
          error => {
            this.store.dispatch(
              new authActions.GetAccountDetailsFailureAction(error)
            );
          }
        )
      )
    );
  }

  @Effect({ dispatch: false })
  getEmployeeProfile(): Observable<Action> {
    return this.actions$.pipe(ofType(authActions.GET_EMPLOYEE_PROFILE)).pipe(
      tap((action: authActions.GetEmployeeProfileAction) =>
        this.authService.getEmployeeProfile(action.id).subscribe(
          eprofile => {
            console.log(eprofile);
            this._userIdleWatch.setUpWatch(100);
            this.store.dispatch(
              new authActions.GetEmployeeProfileSuccessAction(eprofile)
            );
          },
          error => {
            this.store.dispatch(
              new authActions.GetEmployeeProfileFailureAction(error)
            );
          }
        )
      )
    );
  }
}
