import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { SharedModule  } from '../../../shared/shared.module';

import {ListComponent} from './list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  declarations: [ListComponent],
  exports: [ListComponent]
})
export class ListModule {
}
