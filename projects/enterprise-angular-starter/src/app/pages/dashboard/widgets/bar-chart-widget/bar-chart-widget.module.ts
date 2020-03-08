import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { YeaChartWidgetModule } from '@app/core/component/chart-widget';
import { LoadingOverlayModule } from '@app/core/component/loading-overlay';
import { SharedModule } from '@app/shared/shared.module';

import { BarChartWidgetComponent } from './bar-chart-widget.component';

@NgModule({
  imports: [
    CommonModule,

    SharedModule,

    // Core
    LoadingOverlayModule,

    // Chart Widget Style
    YeaChartWidgetModule
  ],
  declarations: [BarChartWidgetComponent],
  exports: [BarChartWidgetComponent, SharedModule]
})
export class BarChartWidgetModule {}
