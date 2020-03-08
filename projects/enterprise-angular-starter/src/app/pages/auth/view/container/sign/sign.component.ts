import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@core/core.module';
import { SignInParam } from '@app/pages/auth/model';
import { AuthStoreFacade } from '@app/pages/auth/store';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'yeasign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignComponent implements OnInit, AfterViewInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
   
  isSignUpActive:boolean = false;
  signUpButton: any;
  signInButton: any;
  container: any;

  public username: any;
  public password: any;

  constructor(private authFacade: AuthStoreFacade) {}

  ngOnInit() {
  }

  keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.doSignIn();
    }
  }

  ngAfterViewInit() {
  }

  signUpHandler($event){
    this.isSignUpActive = true;
  }

  signInHandler($event){
    this.isSignUpActive = false;

  }

  doSignIn() {
    const signInParam: SignInParam = new SignInParam();
    signInParam.username = this.username;
    signInParam.password = this.password;

    this.authFacade.login(signInParam);
  }
}
