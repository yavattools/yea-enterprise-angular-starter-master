import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material';
import { AppActionProgressComponent } from './app-action-progress.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule,
    SharedModule
  ],
  declarations: [ AppActionProgressComponent ],
  exports: [ AppActionProgressComponent ],
})
export class yeaAppActionProgressModule {
}
