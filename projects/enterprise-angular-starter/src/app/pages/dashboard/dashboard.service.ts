import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChartData } from 'chart.js';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@env/environment';
import {
  // audienceOverviewBounceRateDemoData,
  // audienceOverviewBounceRateDemoDataLastWeek,
  // audienceOverviewBounceRateDemoLabels,
  // audienceOverviewSessionDurationDemoData,
  // audienceOverviewSessionDurationDemoLabels,
  // audienceOverviewSessionDurationDemoLastWeek,
  // audienceOverviewSessionsDemoData,
  // audienceOverviewSessionsDemoDataLastWeek,
  // audienceOverviewSessionsDemoLabels,
  // audienceOverviewUsersDemoData,
  // audienceOverviewUsersDemoDataLastWeek,
  // audienceOverviewUsersDemoLabels,

  recentSalesChartDemoLabels,
  recentSalesChartDemoValues,
  recentSalesTableDemoData,
  salesSummaryDemoData,
  salesSummaryDemoLabels,
  productSaleShareDemoData,
  productReturnsShareDemoData,
  salesChartDemoLabels,
  salesChartDemoValues,
  salesChartMonthyDemoValues,
  salesChartMonthlyDemoLabels,
  salesMonthlyTrendChartDemoValues,
  salesMonthlyTrendChartDemoLabels,
  returnsChartDemoValues,
  returnsChartDemoLabels,
  membersChartDemoValues,
  membersChartDemoLabels,
  subscriptionsChartDemoLabels,
  subscriptionsChartDemoValues,
  returnsMonthlyTrendChartDemoValues,
  returnsMonthlyTrendChartDemoLabels,
  membersMonthlyTrendChartDemoValues,
  membersMonthlyTrendChartDemoLabels,
  subscriptionsMonthlyTrendChartDemoValues,
  subscriptionsMonthlyTrendChartDemoLabels
} from '@app/demo-data/widget-demo-data';

/**
 * @class DashboardService
 * This is just a pages service for populating the charts on the dashboard.
 * You will have to implement a similiar service for the data to be populated.
 * Examples are provided below :)
 */

@Injectable()
export class DashboardService {
  url = environment.backend;

  constructor(private http: HttpClient) {}

  getSales() {
    /**
     * Example for real request

     return this.http.get(this.url + '/sales').pipe(
     map(response => this.toSalesChartData(response))
     );
     */

    // Simulating request from local data
    return of({
      labels: salesChartDemoLabels(),
      data: salesChartDemoValues
    }).pipe(map(values => this.toSalesChartData(values)));
  }

  /**
   * Converting Data from Server to Chart compatible format
   * @returns {Chart.ChartData}
   */
  toSalesChartData(chartData: { labels: string[]; data: number[] }) {
    return {
      labels: chartData.labels,
      datasets: [
        {
          label: '# of Sales',
          data: chartData.data,
          backgroundColor: '#FFFFFF'
        }
      ]
    } as ChartData;
  }

  getReturns() {
    // Simulating request from local data
    return of({
      labels: returnsChartDemoLabels(),
      data: returnsChartDemoValues
    }).pipe(map(values => this.toReturnsChartData(values)));
  }

  toReturnsChartData(chartData: { labels: string[]; data: number[] }) {
    return {
      labels: chartData.labels,
      datasets: [
        {
          label: '# of Visits',
          data: chartData.data,
          backgroundColor: '#FFFFFF',
          fill: false,
          borderColor: '#FFFFFF',
          borderWidth: 2,
          lineTension: 0
        }
      ]
    } as ChartData;
  }

  getMembers() {
    // Simulating request from local data
    return of({
      labels: membersChartDemoLabels(),
      data: membersChartDemoValues
    }).pipe(map(values => this.toMembersChartData(values)));
  }

  toMembersChartData(chartData: { labels: string[]; data: number[] }) {
    return {
      labels: chartData.labels,
      datasets: [
        {
          label: '# of Visits',
          data: chartData.data,
          backgroundColor: '#FFFFFF',
          fill: false,
          borderColor: '#FFFFFF',
          borderWidth: 2,
          lineTension: 0
        }
      ]
    } as ChartData;
  }

  getSubscriptions() {
    // Simulating request from local data
    return of({
      labels: subscriptionsChartDemoLabels(),
      data: subscriptionsChartDemoValues
    }).pipe(map(values => this.toSubscriptionsChartData(values)));
  }

  toSubscriptionsChartData(chartData: { labels: string[]; data: number[] }) {
    return {
      labels: chartData.labels,
      datasets: [
        {
          label: '# of Conversions',
          data: chartData.data,
          fill: false,
          backgroundColor: '#FFFFFF',
          borderColor: '#FFFFFF',
          borderWidth: 2,
          pointRadius: 0,
          lineTension: 0
        }
      ]
    } as ChartData;
  }

  getSalesMonthyTrend() {
    // Simulating request from local data
    return of({
      labels: salesMonthlyTrendChartDemoLabels(),
      data: salesMonthlyTrendChartDemoValues
    }).pipe(map(values => this.toSalesMonthyTrendData(values)));
  }

  toSalesMonthyTrendData(chartData: { labels: string[]; data: number[] }) {
    return {
      labels: chartData.labels,
      datasets: [
        {
          label: '# of Clicks',
          data: chartData.data,
          fill: false,
          backgroundColor: '#FFFFFF',
          borderColor: '#FFFFFF',
          borderWidth: 2
        }
      ]
    } as ChartData;
  }

  getReturnsMonthyTrend() {
    // Simulating request from local data
    return of({
      labels: returnsMonthlyTrendChartDemoLabels(),
      data: returnsMonthlyTrendChartDemoValues
    }).pipe(map(values => this.toReturnsMonthyTrendData(values)));
  }

  toReturnsMonthyTrendData(chartData: { labels: string[]; data: number[] }) {
    return {
      labels: chartData.labels,
      datasets: [
        {
          label: '# of Clicks',
          data: chartData.data,
          fill: false,
          backgroundColor: '#FFFFFF',
          borderColor: '#FFFFFF',
          borderWidth: 2
        }
      ]
    } as ChartData;
  }

  getMembersMonthyTrend() {
    // Simulating request from local data
    return of({
      labels: membersMonthlyTrendChartDemoLabels(),
      data: membersMonthlyTrendChartDemoValues
    }).pipe(map(values => this.toMembersMonthyTrendData(values)));
  }

  toMembersMonthyTrendData(chartData: { labels: string[]; data: number[] }) {
    return {
      labels: chartData.labels,
      datasets: [
        {
          label: '# of Clicks',
          data: chartData.data,
          fill: false,
          backgroundColor: '#FFFFFF',
          borderColor: '#FFFFFF',
          borderWidth: 2
        }
      ]
    } as ChartData;
  }

  getSubscriptionsMonthyTrend() {
    // Simulating request from local data
    return of({
      labels: subscriptionsMonthlyTrendChartDemoLabels(),
      data: subscriptionsMonthlyTrendChartDemoValues
    }).pipe(map(values => this.toSubscriptionsMonthyTrendData(values)));
  }

  toSubscriptionsMonthyTrendData(chartData: {
    labels: string[];
    data: number[];
  }) {
    return {
      labels: chartData.labels,
      datasets: [
        {
          label: '# of Clicks',
          data: chartData.data,
          fill: false,
          backgroundColor: '#FFFFFF',
          borderColor: '#FFFFFF',
          borderWidth: 2
        }
      ]
    } as ChartData;
  }

  getProductSalesShareDemoData() {
    // Simulating request from local data
    return of(productSaleShareDemoData).pipe(
      map(values => this.toProductSalesShareDemoChartData(values))
    );
  }

  toProductSalesShareDemoChartData(
    chartData: { label: string; value: number }[]
  ) {
    return {
      labels: chartData.map(data => data.label),
      datasets: [
        {
          data: chartData.map(data => data.value),
          backgroundColor: [
            '#2196F3',
            '#009688',
            '#4CAF50',
            '#607D8B',
            '#E91E63'
          ]
        }
      ]
    } as ChartData;
  }

  getProductReturnsShareDemoData() {
    // Simulating request from local data
    return of(productReturnsShareDemoData).pipe(
      map(values => this.toProductReturnsShareDemoChartData(values))
    );
  }

  toProductReturnsShareDemoChartData(
    chartData: { label: string; value: number }[]
  ) {
    return {
      labels: chartData.map(data => data.label),
      datasets: [
        {
          data: chartData.map(data => data.value),
          backgroundColor: [
            '#2196F3',
            '#009688',
            '#4CAF50',
            '#607D8B',
            '#E91E63'
          ]
        }
      ]
    } as ChartData;
  }

  getSalesSummary() {
    // Simulating request from local data
    return of({
      labels: salesSummaryDemoLabels(),
      data: salesSummaryDemoData
    }).pipe(map(values => this.toSalesSummaryChartData(values)));
  }

  toSalesSummaryChartData(chartData: {
    labels: string[];
    data: { [set: string]: number[] };
  }) {
    return {
      labels: chartData.labels,
      datasets: [
        {
          label: 'Revenue',
          backgroundColor: '#7cb342',
          data: chartData.data.revenue
        },
        {
          label: 'Expenses',
          backgroundColor: '#EEEEEE',
          data: chartData.data.expenses
        }
      ]
    } as ChartData;
  }

  // getAudienceOverviewUsers() {
  //   // Simulating request from local data
  //   return of({
  //     labels: audienceOverviewUsersDemoLabels(),
  //     data: { thisWeek: audienceOverviewUsersDemoData, lastWeek: audienceOverviewUsersDemoDataLastWeek }
  //   }).pipe(
  //     map(values => this.toAudienceOverviewUsersChartData(values))
  //   );
  // }

  // toAudienceOverviewUsersChartData(chartData: { labels: string[], data: { [set: string]: number[] } }) {
  //   return {
  //     labels: chartData.labels,
  //     datasets: [
  //       {
  //         label: 'Users',
  //         data: chartData.data.thisWeek,
  //         lineTension: 0,
  //         fill: false,
  //         borderColor: '#4285f4',
  //         pointRadius: 0
  //       },
  //       {
  //         label: 'Users - Last Week',
  //         data: chartData.data.lastWeek,
  //         lineTension: 0,
  //         fill: false,
  //         borderColor: 'rgba(66, 133, 244, 0.3)',
  //         borderDash: [3, 5],
  //         pointRadius: 0
  //       }
  //     ]
  //   } as ChartData;
  // }

  // getAudienceOverviewSessions() {
  //   // Simulating request from local data
  //   return of({
  //     labels: audienceOverviewSessionsDemoLabels(),
  //     data: { thisWeek: audienceOverviewSessionsDemoData, lastWeek: audienceOverviewSessionsDemoDataLastWeek }
  //   }).pipe(
  //     map(values => this.toAudienceOverviewSessionsChartData(values))
  //   );
  // }

  // toAudienceOverviewSessionsChartData(chartData: { labels: string[], data: { [set: string]: number[] } }) {
  //   return {
  //     labels: chartData.labels,
  //     datasets: [
  //       {
  //         label: 'Sessions',
  //         data: chartData.data.thisWeek,
  //         lineTension: 0,
  //         fill: false,
  //         backgroundColor: '#4285f4',
  //         borderColor: '#4285f4',
  //       },
  //       {
  //         label: 'Sessions - Last Week',
  //         data: chartData.data.lastWeek,
  //         lineTension: 0,
  //         fill: false,
  //         borderColor: 'rgba(66, 133, 244, 0.3)',
  //         borderDash: [3, 5],
  //         pointRadius: 0
  //       }
  //     ]
  //   } as ChartData;
  // }

  // getAudienceOverviewBounceRate() {
  //   // Simulating request from local data
  //   return of({
  //     labels: audienceOverviewBounceRateDemoLabels(),
  //     data: { thisWeek: audienceOverviewBounceRateDemoData, lastWeek: audienceOverviewBounceRateDemoDataLastWeek }
  //   }).pipe(
  //     map(values => this.toAudienceOverviewBounceRateChartData(values))
  //   );
  // }

  // toAudienceOverviewBounceRateChartData(chartData: { labels: string[], data: { [set: string]: number[] } }) {
  //   return {
  //     labels: chartData.labels,
  //     datasets: [
  //       {
  //         label: 'Bounce Rate',
  //         data: chartData.data.thisWeek,
  //         lineTension: 0,
  //         fill: false,
  //         backgroundColor: '#4285f4',
  //         borderColor: '#4285f4',
  //       },
  //       {
  //         label: 'Bounce Rate - Last Week',
  //         data: chartData.data.lastWeek,
  //         lineTension: 0,
  //         fill: false,
  //         borderColor: 'rgba(66, 133, 244, 0.3)',
  //         borderDash: [3, 5],
  //         pointRadius: 0
  //       }
  //     ]
  //   } as ChartData;
  // }

  // getAudienceOverviewSessionDuration() {
  //   // Simulating request from local data
  //   return of({
  //     labels: audienceOverviewSessionDurationDemoLabels(),
  //     data: { thisWeek: audienceOverviewSessionDurationDemoData, lastWeek: audienceOverviewSessionDurationDemoLastWeek }
  //   }).pipe(
  //     map(values => this.toAudienceOverviewSessionDurationChartData(values))
  //   );
  // }

  // toAudienceOverviewSessionDurationChartData(chartData: { labels: string[], data: { [set: string]: number[] } }) {
  //   return {
  //     labels: chartData.labels,
  //     datasets: [
  //       {
  //         label: 'Session Duration',
  //         data: chartData.data.thisWeek,
  //         lineTension: 0,
  //         fill: false,
  //         backgroundColor: '#4285f4',
  //         borderColor: '#4285f4',
  //       },
  //       {
  //         label: 'Session Duration - Last Week',
  //         data: chartData.data.lastWeek,
  //         lineTension: 0,
  //         fill: false,
  //         borderColor: 'rgba(66, 133, 244, 0.3)',
  //         borderDash: [3, 5],
  //         pointRadius: 0
  //       }
  //     ]
  //   } as ChartData;
  // }

  getRecentSalesTableData() {
    // Simulating request from local data
    return of(recentSalesTableDemoData);
  }

  getRecentSalesData() {
    return of({
      labels: recentSalesChartDemoLabels(),
      data: recentSalesChartDemoValues
    }).pipe(map(values => this.toRecentSalesChartData(values)));
  }

  toRecentSalesChartData(chartData: { labels: string[]; data: number[] }) {
    return {
      labels: chartData.labels,
      datasets: [
        {
          label: 'Sales',
          backgroundColor: '#DBF6F9',
          borderColor: '#DBF6F9',
          data: chartData.data,
          lineTension: 0
        }
      ]
    };
  }
}
