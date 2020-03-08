import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { YeaCardModule } from '@app/core/component/card';
import { LoadingOverlayModule } from '@app/core/component/loading-overlay';
import { SharedModule } from '@app/shared/shared.module';

import { AudienceOverviewWidgetComponent } from './audience-overview-widget.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,

    // Core
    LoadingOverlayModule,
    YeaCardModule
  ],
  declarations: [AudienceOverviewWidgetComponent],
  exports: [
    AudienceOverviewWidgetComponent,
    LoadingOverlayModule,
    YeaCardModule
  ]
})
export class AudienceOverviewWidgetModule {}
