import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { YeaCardModule } from '@app/core/component/card';
import { LoadingOverlayModule } from '@app/core/component/loading-overlay';
import { SharedModule } from '@app/shared/shared.module';
import { SalesSummaryWidgetComponent } from './sales-summary-widget.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,

    // Core
    LoadingOverlayModule,
    YeaCardModule
  ],
  declarations: [SalesSummaryWidgetComponent],
  exports: [SalesSummaryWidgetComponent, SharedModule]
})
export class SalesSummaryWidgetModule {}
