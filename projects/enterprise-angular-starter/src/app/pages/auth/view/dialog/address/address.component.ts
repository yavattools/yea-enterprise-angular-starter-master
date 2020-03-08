import { Component, Inject, OnInit, ChangeDetectorRef } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatSnackBar,
  MatSnackBarConfig,
  MatOption
} from '@angular/material';
import {
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked,
  NO_ERRORS_SCHEMA
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  group,
  keyframes
} from '@angular/animations';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { AppConstantsService } from '@app/core/providers/constants';

import { AddressInfo } from '../../../model';

@Component({
  selector: 'yea-address',
  templateUrl: 'address.component.html',
  styleUrls: ['./address.component.scss'],
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
export class DialogAddressComponent implements OnInit {
  @Input() showProgress: boolean;
  @Input() opened: boolean;
  @Input() message: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Output() closeData: EventEmitter<any> = new EventEmitter<any>();
  form: FormGroup;
  description: string;

  public address: AddressInfo;

  constructor(
    public constants: AppConstantsService,
    public snackBar: MatSnackBar,
    public cd: ChangeDetectorRef,
    private fb: FormBuilder,
    //   @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogAddressComponent>
  ) {
    this.dialogRef.disableClose = true;
  }

  ngOnInit() {
    this.form = this.fb.group({
      addressLine1: [this.address.line1, Validators.required],
      addressLine2: [this.address.line2],
      city: [this.address.city, Validators.required],
      zipcode: [this.address.zipcode, Validators.required],
      country: [this.address.country, Validators.required],
      state: [this.address.state, Validators.required]
    });
  }

  close() {
    this.dialogRef.close({ closed: true });
  }

  public save() {}
}
