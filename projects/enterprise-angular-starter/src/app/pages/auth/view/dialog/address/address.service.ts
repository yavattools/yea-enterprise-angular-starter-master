import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError, filter } from 'rxjs/operators';

import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';
import { DialogAddressComponent } from './address.component';
import { AddressInfo } from '../../../model';

@Injectable()
export class DialogAddressService {
  constructor(public dialog: MatDialog) {}

  public confirm(
    title: string,
    message: string,
    address: AddressInfo
  ): Observable<any> {
    let dialogRef: MatDialogRef<DialogAddressComponent>;
    const config = new MatDialogConfig();

    dialogRef = this.dialog.open(DialogAddressComponent, config);
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;
    dialogRef.componentInstance.address = address;

    return dialogRef.afterClosed();
  }
}
