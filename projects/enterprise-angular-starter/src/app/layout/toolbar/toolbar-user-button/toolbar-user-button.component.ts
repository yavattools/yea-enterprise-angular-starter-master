import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthStoreFacade } from '@app/pages/auth';
import {
  AccountInfo,
  ProfileInfo,
  EmployeeProfile
} from '@app/pages/auth/model';

@Component({
  selector: 'yea-toolbar-user-button',
  templateUrl: './toolbar-user-button.component.html',
  styleUrls: ['./toolbar-user-button.component.scss']
})
export class ToolbarUserButtonComponent implements OnInit {
  isOpen: boolean;
  loginUser$: Observable<ProfileInfo>;
  loginUserStaffProfile$: Observable<EmployeeProfile>;

  loginUser: ProfileInfo;

  constructor(private router: Router, private authFacade: AuthStoreFacade) {
    this.loginUser = new ProfileInfo();

    this.loginUser$ = this.authFacade.loginUser$;
    this.loginUserStaffProfile$ = this.authFacade.loginUserStaffProfile$;

    this.loginUser$.subscribe(loginUser => {
      console.log('loginIn User' + loginUser);

      this.loginUser = loginUser;
    });
  }

  ngOnInit() {}

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onClickOutside() {
    this.isOpen = false;
  }

  goToSettings() {
    this.router.navigateByUrl('settings');
  }

  gotoLogout() {
    this.authFacade.gotoLogOut();
  }
}
