import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { yeaAspectRatioModule } from '@app/core/directives';
import { SharedModule } from '@app/shared/shared.module';
import { environment } from '@env/environment';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AdvancedPieChartWidgetModule } from './widgets/advanced-pie-chart-widget/advanced-pie-chart-widget.module';
import { AudienceOverviewWidgetModule } from './widgets/audience-overview-widget/audience-overview-widget.module';
import { BarChartWidgetModule } from './widgets/bar-chart-widget/bar-chart-widget.module';
import { DonutChartWidgetModule } from './widgets/donut-chart-widget/donut-chart-widget.module';
import { LineChartWidgetModule } from './widgets/line-chart-widget/line-chart-widget.module';
import { MapsWidgetModule } from './widgets/maps-widget/maps-widget.module';
import { MarketWidgetModule } from './widgets/market-widget/market-widget.module';
import { QuickInfoWidgetModule } from './widgets/quick-info-widget/quick-info-widget.module';
import { RealtimeUsersWidgetModule } from './widgets/realtime-users-widget/realtime-users-widget.module';
import { RecentSalesWidgetModule } from './widgets/recent-sales-widget/recent-sales-widget.module';
import { SalesSummaryWidgetModule } from './widgets/sales-summary-widget/sales-summary-widget.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { yeaAppActionProgressModule } from '@app/core/component/app-action-progress';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    // Core
    // yeaAspectRatioModule,

    // Widgets
    BarChartWidgetModule,
    LineChartWidgetModule,
    DonutChartWidgetModule,
    SalesSummaryWidgetModule,
    AudienceOverviewWidgetModule,
    RealtimeUsersWidgetModule,
    QuickInfoWidgetModule,
    RecentSalesWidgetModule,
    AdvancedPieChartWidgetModule,
    MapsWidgetModule,
    MarketWidgetModule,
    yeaAppActionProgressModule,

    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    })
  ],
  declarations: [DashboardComponent],
  providers: [DashboardService],
  exports: [
    SharedModule,
    TranslateModule,
    HttpClientModule,
    yeaAppActionProgressModule
  ]
})
export class DashboardModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/`,
    '.json'
  );
}
