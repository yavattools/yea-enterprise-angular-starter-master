import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  animate,
  query,
  style,
  transition,
  trigger,
  stagger,
  sequence,
  state,
  keyframes
} from '@angular/animations';
import { combineLatest, Observable, of, Subject } from 'rxjs';
import { map, startWith, filter, takeUntil } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthStoreFacade } from '@app/pages/auth/store';
import { SignInParam } from '@app/pages/auth/model';
import { YeaSnackBarService } from '@app/core/utilities/snackbar';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core/providers';

import { AppConstantsService } from '@app/core/providers/constants';

@Component({
  selector: 'yea-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        animate(
          '0.6s 100ms ease-in',
          style({
            fontSize: '19px',
            height: '300px',
            width: '300px'
          })
        ),
        animate(
          1000,
          keyframes([
            style({ opacity: 1, transform: 'translateX(0)', offset: 0 })
            // style({ opacity: 1, transform: 'translateX(0)', offset: 0.2 }),
            // style({ opacity: 1, transform: 'translateX(0)', offset: 0.4 }),
            // style({ opacity: 1, transform: 'translateX(0)', offset: 0.6 }),
            // style({ opacity: 1, transform: 'translateX(0)', offset: 0.8 }),
            // style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
          ])
        )
      ]),
      transition('* => void', [
        animate(
          1000,
          keyframes([
            style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
            style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
            style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
          ])
        )
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {
  progress = false;
  mode = 'determinate';
  color = 'primary';
  public loginProgress$: Observable<boolean>;
  inputType = 'password';
  visible = false;
  public username: any;
  public password: any;
  public routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private snackbar: MatSnackBar,
    private authFacade: AuthStoreFacade,
    private snackbarService: YeaSnackBarService,
    // private toastService: ToastService,
    private constants: AppConstantsService
  ) {
    this.loginProgress$ = this.authFacade.loginProgress$;
  }

  /**
   * Needed for the Layout
   */
  private _gap = 16;
  gap = `${this._gap}px`;

  col(colAmount: number) {
    return `1 1 calc(${100 / colAmount}% - ${this._gap -
      this._gap / colAmount}px)`;
  }

  ngOnInit() {
    console.log('login component loaded');
    // this.form = this.fb.group({
    //   email: ['', Validators.required],
    //   password: ['', Validators.required]
    // });
  }

  keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.doSignIn();
    }
  }

  doSignIn() {
    const signInParam: SignInParam = new SignInParam();
    signInParam.username = this.username;
    signInParam.password = this.password;
    // this.toastService.show({
    //   text: `Toast message `,
    //   type: 'success',
    // });
    // this.snackbarService.openSnackBar('Login page Loaded', this.constants.snackbarType.ERROR, 100000 );

    this.authFacade.login(signInParam);
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }
}
