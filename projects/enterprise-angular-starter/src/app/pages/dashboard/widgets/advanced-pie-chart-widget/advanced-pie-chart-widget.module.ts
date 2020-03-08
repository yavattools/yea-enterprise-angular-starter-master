import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { YeaCardModule } from '@app/core/component/card';
import { LoadingOverlayModule } from '@app/core/component/loading-overlay';
import { SharedModule } from '@app/shared/shared.module';

// import { ScrollbarModule } from '../../common/scrollbar/scrollbar.module';
import { AdvancedPieChartWidgetComponent } from './advanced-pie-chart-widget.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,

    // Core
    YeaCardModule,
    LoadingOverlayModule
    // ScrollbarModule
  ],
  declarations: [AdvancedPieChartWidgetComponent],
  exports: [
    AdvancedPieChartWidgetComponent,
    LoadingOverlayModule,
    YeaCardModule
  ]
})
export class AdvancedPieChartWidgetModule {}
