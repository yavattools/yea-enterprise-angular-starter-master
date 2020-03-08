import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { YeaCardModule } from '@app/core/component/card';
import { ListModule } from '@app/core/component/list';
import { LoadingOverlayModule } from '@app/core/component/loading-overlay';
import { SharedModule } from '@app/shared/shared.module';
import { RecentSalesWidgetTableComponent } from './recent-sales-widget-table/recent-sales-widget-table.component';
import { RecentSalesWidgetComponent } from './recent-sales-widget.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,

    // Core
    LoadingOverlayModule,
    YeaCardModule,
    ListModule
  ],
  declarations: [RecentSalesWidgetComponent, RecentSalesWidgetTableComponent],
  exports: [RecentSalesWidgetComponent, SharedModule]
})
export class RecentSalesWidgetModule {}
