import { Injectable, OnInit } from '@angular/core';
import { UserIdleService } from './user-idle.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { AuthStoreFacade } from '@app/pages/auth/store/auth-store-facade';
import { Router } from '@angular/router';

import { ExpirationWarningDialogComponent } from '../dialog/expiration-warning/expiration-warning-dialog.component';

@Injectable()
export class UserIdleWatchService implements OnInit {
  countDownVal: number;
  dialogRef: MatDialogRef<ExpirationWarningDialogComponent> = null;
  timeOutSub: any;
  timeStartSub: any;

  constructor(
    public dialog: MatDialog,
    private userIdle: UserIdleService,
    private authFacade: AuthStoreFacade,
    private router: Router
  ) {}

  ngOnInit() {}

  setUpWatch(countDownVal: number) {
    this.countDownVal = countDownVal;
    this.userIdle.setConfigValue({
      idle: 100,
      timeout: this.countDownVal,
      ping: 5
    });

    //Start watching for user inactivity.
    this.userIdle.startWatching();

    // Start watching when user idle is starting.
    this.timeStartSub = this.userIdle.onTimerStart().subscribe(count => {
      if (count) {
        let timeout = this.countDownVal - count;
        //show the pop up
        this.openWarningWindow();
        this.dialogRef.componentInstance.timeout = timeout;
      }
    });

    // Start watch when time is up.
    this.timeOutSub = this.userIdle.onTimeout().subscribe(() => {
      //close the popup
      this.closeWindow();
      this.userIdle.stopTimer();
      this.router.navigateByUrl('/layout/auth');

      this.authFacade.gotoLogOut();
    });
  }

  openWarningWindow() {
    if (
      this.dialogRef == null ||
      (this.dialogRef && this.dialogRef.componentInstance == null)
    ) {
      let config = new MatDialogConfig();
      this.dialogRef = this.dialog.open(
        ExpirationWarningDialogComponent,
        config
      );
      this.dialogRef.componentInstance.timeout = this.countDownVal;
      //this.userIdle.stopWatching();
    }
  }

  closeWindow() {
    this.dialogRef.close();
    //this.dialogRef = null;
    this.timeOutSub.unsubscribe();
    this.timeStartSub.unsubscribe();
  }

  restart() {
    this.closeWindow();
    this.userIdle.resetTimer();
  }
}
