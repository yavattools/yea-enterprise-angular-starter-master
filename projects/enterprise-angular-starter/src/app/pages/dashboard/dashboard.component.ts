import { environment } from '@env/environment';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartData } from 'chart.js';
import * as moment from 'moment';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { AdvancedPieChartWidgetOptions } from './widgets/advanced-pie-chart-widget/advanced-pie-chart-widget-options.interface';
import { AudienceOverviewWidgetOptions } from './widgets/audience-overview-widget/audience-overview-widget-options.interface';
import { BarChartWidgetOptions } from './widgets/bar-chart-widget/bar-chart-widget-options.interface';
import { DonutChartWidgetOptions } from './widgets/donut-chart-widget/donut-chart-widget-options.interface';
import { LineChartWidgetOptions } from './widgets/line-chart-widget/line-chart-widget-options.interface';
import {
  RealtimeUsersWidgetData,
  RealtimeUsersWidgetPages
} from './widgets/realtime-users-widget/realtime-users-widget.interface';
import { RecentSalesWidgetOptions } from './widgets/recent-sales-widget/recent-sales-widget-options.interface';
import { SalesSummaryWidgetOptions } from './widgets/sales-summary-widget/sales-summary-widget-options.interface';
import { DashboardService } from './dashboard.service';
import { QuickInfoWidgetOptions } from './widgets/quick-info-widget';
import { TranslateService } from '@ngx-translate/core';
import {
  ROUTE_ANIMATIONS_ELEMENTS,
  AppConstantsService
} from '@app/core/providers';
import {
  routeAnimations,
  AppState,
  LocalStorageService
} from '@app/core/core.module';
import {
  selectSettingsStickyHeader,
  selectSettingsLanguage,
  selectEffectiveTheme
} from '@app/pages/settings/store/selectors/settings.selectors';

@Component({
  selector: 'yea-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public theme$: Observable<string>;
  year = '2020';
  version = '1.0';
  envName = environment.envName;
  isProd = environment.production;
  public routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  ytdSalesQuickInfo: QuickInfoWidgetOptions = {
    label: 'Meetings Completed YTD',
    background: '#57973F',
    color: '#ffffff',
    icon: 'access_time'
  };

  ytdReturnsQuickInfo: QuickInfoWidgetOptions = {
    label: 'Meetings Cancelled YTD',
    background: '#D85353',
    color: '#ffffff',
    icon: 'access_time'
  };

  ytdMembersQuickInfo: QuickInfoWidgetOptions = {
    label: 'Meeting Context Inprogress',
    background: '#3D85C6',
    color: '#ffffff',
    icon: 'access_time'
  };

  ytdSubscriptionsQuickInfo: QuickInfoWidgetOptions = {
    label: 'Meeting Context Ready',
    background: '#A64D79',
    color: '#ffffff',
    icon: 'access_time'
  };

  salesMonthlyData$: Observable<ChartData>;
  totalSalesOptions: BarChartWidgetOptions = {
    title: 'Monthly Meetings Completed',
    gain: 25.3,
    subTitle: 'compared to last month',
    background: '#57973F',
    color: '#ffffff'
  };

  returnsMonthlyData$: Observable<ChartData>;
  totalReturnsOptions: LineChartWidgetOptions = {
    title: 'Monthy Meetings Cancelled',
    gain: 12.5,
    subTitle: 'compared to last month',
    background: '#D85353',
    color: '#FFFFFF'
  };

  membersMonthlyData$: Observable<ChartData>;
  totalMembersOptions: LineChartWidgetOptions = {
    title: 'Monthy Meetings InProgress',
    gain: 12.5,
    subTitle: 'compared to last month',
    background: '#3D85C6',
    color: '#FFFFFF'
  };

  subscriptionsMonthlyData$: Observable<ChartData>;
  subscriptionsMonthlyOptions: LineChartWidgetOptions = {
    title: 'Monthly Metings Ready',
    gain: 20.4,
    subTitle: 'compared to last month',
    background: '#A64D79',
    color: '#FFFFFF'
  };

  totalSalesMonthlyTrendOptionsData$: Observable<ChartData>;

  totalSalesMonthlyTrendOptions: LineChartWidgetOptions = {
    title: 'Meeting Completon Trend',
    gain: 26.1,
    subTitle: 'compared to last month',
    background: '#57973F',
    color: '#FFFFFF'
  };

  totalReturnsMonthlyTrendOptionsData$: Observable<ChartData>;

  totalReturnsMonthlyTrendOptions: LineChartWidgetOptions = {
    title: 'Meeting Cancellation Trend',
    gain: 26.1,
    subTitle: 'compared to last month',
    background: '#D85353',
    color: '#FFFFFF'
  };

  totalMembersMonthlyTrendOptionsData$: Observable<ChartData>;

  totalMembersMonthlyTrendOptions: LineChartWidgetOptions = {
    title: 'Meetings Progress Trend',
    gain: 26.1,
    subTitle: 'compared to last month',
    background: '#3D85C6',
    color: '#FFFFFF'
  };

  totalSubscriptionsMonthlyTrendOptionsData$: Observable<ChartData>;

  totalSubscriptionsMonthlyTrendOptions: LineChartWidgetOptions = {
    title: 'Meetings Ready Trend',
    gain: 26.1,
    subTitle: 'compared to last month',
    background: '#A64D79',
    color: '#FFFFFF'
  };

  productSalesShareDemoData$: Observable<ChartData>;
  productSalesShareDemoOptions: DonutChartWidgetOptions = {
    title: 'Product Share in Sales',
    subTitle: 'Sales Share of main line Products'
  };

  productReturnsShareDemoData$: Observable<ChartData>;
  productReturnsShareDemoOptions: DonutChartWidgetOptions = {
    title: 'Product Share in Returns',
    subTitle: 'Returns Share of main line Products'
  };

  private _realtimeUsersDataSubject = new ReplaySubject<
    RealtimeUsersWidgetData
  >(30);
  realtimeUsersData$: Observable<
    RealtimeUsersWidgetData
  > = this._realtimeUsersDataSubject.asObservable();
  private _realtimeUsersPagesSubject = new ReplaySubject<
    RealtimeUsersWidgetPages[]
  >(1);
  realtimeUsersPages$: Observable<
    RealtimeUsersWidgetPages[]
  > = this._realtimeUsersPagesSubject.asObservable();

  advancedPieChartOptions: AdvancedPieChartWidgetOptions = {
    title: 'Sales by country',
    subTitle: 'Top 3 countries sold 34% more items this month\n'
  };
  advancedPieChartData$: Observable<ChartData>;

  salesSummaryData$: Observable<ChartData>;
  salesSummaryOptions: SalesSummaryWidgetOptions = {
    title: 'Sales Summary',
    subTitle: 'Compare Sales by Time',
    gain: 37.2
  };

  audienceOverviewOptions: AudienceOverviewWidgetOptions[] = [];

  recentSalesData$: Observable<ChartData>;
  recentSalesOptions: RecentSalesWidgetOptions = {
    title: 'Recent Sales',
    subTitle: 'See who bought what in realtime'
  };
  recentSalesTableOptions = {
    pageSize: 5,
    columns: [
      {
        name: 'Product',
        property: 'name',
        visible: true,
        isModelProperty: true
      },
      {
        name: '$ Price',
        property: 'price',
        visible: true,
        isModelProperty: true
      },
      {
        name: 'Quantity',
        property: 'quantity',
        visible: true,
        isModelProperty: true
      },
      {
        name: 'Time ago',
        property: 'timestamp',
        visible: true,
        isModelProperty: true
      }
    ]
  };
  recentSalesTableData$: Observable<any[]>;

  private static isInitialLoad = true;

  constructor(
    private dashboardService: DashboardService,
    private store: Store<AppState>,
    private translate: TranslateService,
    private router: Router
  ) {
    /**
     * Edge wrong drawing fix
     * Navigate anywhere and on Promise right back
     */
    if (/Edge/.test(navigator.userAgent)) {
      if (DashboardComponent.isInitialLoad) {
        this.router.navigate(['/apps/chat']).then(() => {
          this.router.navigate(['/']);
        });

        DashboardComponent.isInitialLoad = false;
      }
    }
  }

  /**
   * Needed for the Layout
   */
  private _gap = 16;
  gap = `${this._gap}px`;

  col(colAmount: number) {
    return `1 1 calc(${100 / colAmount}% - ${this._gap -
      this._gap / colAmount}px)`;
  }

  /**
   * Everything implemented here is purely for Demo-Demonstration and can be removed and replaced with your implementation
   */
  ngOnInit() {
    this.translate.use('en');

    this.salesMonthlyData$ = this.dashboardService.getSales();
    this.returnsMonthlyData$ = this.dashboardService.getReturns();
    this.membersMonthlyData$ = this.dashboardService.getMembers();
    this.subscriptionsMonthlyData$ = this.dashboardService.getSubscriptions();
    this.totalSalesMonthlyTrendOptionsData$ = this.dashboardService.getSalesMonthyTrend();
    this.totalReturnsMonthlyTrendOptionsData$ = this.dashboardService.getReturnsMonthyTrend();
    this.totalMembersMonthlyTrendOptionsData$ = this.dashboardService.getMembersMonthyTrend();
    this.totalSubscriptionsMonthlyTrendOptionsData$ = this.dashboardService.getSubscriptionsMonthyTrend();
    this.productSalesShareDemoData$ = this.dashboardService.getProductSalesShareDemoData();
    this.productReturnsShareDemoData$ = this.dashboardService.getProductReturnsShareDemoData();
    this.theme$ = this.store.pipe(select(selectEffectiveTheme));

    // Prefill realtimeUsersData with 30 random values
    for (let i = 0; i < 60; i++) {
      this._realtimeUsersDataSubject.next({
        label: moment().fromNow(),
        value: Math.round(Math.random() * (100 - 30) + 20)
      } as RealtimeUsersWidgetData);
    }

    // Simulate incoming values for Realtime Users Widget
    setInterval(() => {
      this._realtimeUsersDataSubject.next({
        label: moment().fromNow(),
        value: Math.round(Math.random() * (100 - 30) + 20)
      } as RealtimeUsersWidgetData);
    }, 5000);

    // Prefill realtimeUsersPages with 3 random values
    const demoPages = [];
    const demoPagesPossibleValues = [
      '/profile',
      '/tables/balancesheet',
      '/apps/inbox',
      '/apps/ngx-table',
      '/dashboard',
      '/login',
      '/register',
      '/apps/calendar',
      '/forms/form-elements'
    ];
    for (let i = 0; i < 3; i++) {
      const nextPossibleValue =
        demoPagesPossibleValues[
          +Math.round(Math.random() * (demoPagesPossibleValues.length - 1))
        ];
      if (demoPages.indexOf(nextPossibleValue) === -1) {
        demoPages.push(nextPossibleValue);
      }

      this._realtimeUsersPagesSubject.next(
        demoPages.map(pages => {
          return { page: pages } as RealtimeUsersWidgetPages;
        })
      );
    }

    // Simulate incoming values for Realtime Users Widget
    setInterval(() => {
      const nextPossibleValue =
        demoPagesPossibleValues[
          +Math.round(Math.random() * (demoPagesPossibleValues.length - 1))
        ];
      if (demoPages.indexOf(nextPossibleValue) === -1) {
        demoPages.push(nextPossibleValue);
      }

      if (demoPages.length > Math.random() * (5 - 1) + 1) {
        demoPages.splice(Math.round(Math.random() * demoPages.length), 1);
      }

      this._realtimeUsersPagesSubject.next(
        demoPages.map(pages => {
          return { page: pages } as RealtimeUsersWidgetPages;
        })
      );
    }, 5000);

    this.recentSalesTableData$ = this.dashboardService.getRecentSalesTableData();
    this.recentSalesData$ = this.dashboardService.getRecentSalesData();
  }
}
