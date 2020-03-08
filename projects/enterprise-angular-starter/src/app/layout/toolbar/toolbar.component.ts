import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Observable } from 'rxjs';
import { AuthStoreFacade } from '@app/pages/auth';

import {
  AccountInfo,
  ProfileInfo,
  EmployeeProfile
} from '@app/pages/auth/model';
import { Unit } from '@app/core/store/app-util';

@Component({
  selector: 'yea-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input('quickpanel') quickpanel: MatSidenav;
  @Input('leftpanel') leftpanel: MatSidenav;

  loginUserStaffProfile$: Observable<EmployeeProfile>;
  loginUserUnitProfile$: Observable<Unit>;

  constructor(private authFacade: AuthStoreFacade) {
    this.loginUserStaffProfile$ = this.authFacade.loginUserStaffProfile$;
    this.loginUserUnitProfile$ = this.authFacade.loginUserUnitProfile$;
  }

  ngOnInit() {}
}
