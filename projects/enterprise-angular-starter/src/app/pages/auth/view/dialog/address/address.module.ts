import {
  MatDialogModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DialogAddressComponent } from './address.component';
import { DialogAddressService } from './address.service';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModule],
  exports: [
    // DialogAddressComponent,
    CommonModule,
    SharedModule
  ],
  declarations: [DialogAddressComponent],
  providers: [DialogAddressService],
  entryComponents: [DialogAddressComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DialogAddressModule {}
