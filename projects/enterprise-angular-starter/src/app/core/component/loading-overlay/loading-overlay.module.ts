import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule  } from '../../../shared/shared.module';

import { LoadingOverlayComponent } from './loading-overlay.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [LoadingOverlayComponent],
  exports: [LoadingOverlayComponent, SharedModule]
})
export class LoadingOverlayModule {
}
