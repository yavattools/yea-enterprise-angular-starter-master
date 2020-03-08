import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { AuthStoreFacade } from '@app/pages/auth/store/auth-store-facade';
import { UserIdleService } from '@app/pages/auth/view/provider/user-idle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'yea-expiration-warning-dialog',
  templateUrl: 'expiration-warning-dialog.component.html',
  styleUrls: ['./expiration-warning-dialog.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        animate(
          500,
          keyframes([
            style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
            style({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
          ])
        )
      ]),
      transition('* => void', [
        animate(
          500,
          keyframes([
            style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
            style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
            style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
          ])
        )
      ])
    ]),
    trigger('slideCard', [
      state(
        'hideme',
        style({ opacity: '0 !important;', visibility: 'hidden' })
      ),
      state(
        'down',
        style({
          display: 'inline',
          height: '40px',
          opacity: '1 !important;',
          visibility: 'visible'
        })
      ),
      // asterisk calculates the size of the element
      state(
        'up',
        style({ height: '0px', opacity: '0 !important;', visibility: 'hidden' })
      ),
      // transition('0 <=> 1', animate('200ms ease')),
      transition('down <=> up', [animate('200ms ease-in-out')])
    ])
  ]
})
export class ExpirationWarningDialogComponent implements OnInit, OnDestroy {
  public timeout: number;
  private popSub: any;

  constructor(
    public dialogRef: MatDialogRef<ExpirationWarningDialogComponent>,
    public userIdle: UserIdleService,
    private authFacade: AuthStoreFacade,
    private router: Router
  ) {
    this.dialogRef.disableClose = true;
  }

  ngOnInit() {
    this.popSub = this.dialogRef.afterClosed().subscribe(result => {
      this.reset();
    });
  }

  ngOnDestroy() {
    // this.popSub.unsubscribe();
  }

  reset() {
    this.userIdle.resetTimer();
    // this.authFacade.gotoLogOut();
    // this.router.navigateByUrl('/auth/login');
    this.dialogRef.close();

    //this._userIdle.startWatching();
  }

  logout() {
    this.userIdle.resetTimer();
    this.authFacade.gotoLogOut();
    this.router.navigateByUrl('/layout/auth');
    this.dialogRef.close();
  }
}
