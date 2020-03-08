import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { YeaCardModule } from '@app/core/component/card';
import { YeaChartWidgetModule } from '@app/core/component/chart-widget';
import { LoadingOverlayModule } from '@app/core/component/loading-overlay';
import { SharedModule } from '@app/shared/shared.module';

import { DonutChartWidgetComponent } from './donut-chart-widget.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,

    // Core
    YeaCardModule,
    LoadingOverlayModule,

    // Chart Widget Style
    YeaChartWidgetModule
  ],
  declarations: [DonutChartWidgetComponent],
  exports: [DonutChartWidgetComponent]
})
export class DonutChartWidgetModule {}
