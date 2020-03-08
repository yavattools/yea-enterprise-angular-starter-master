import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule  } from '../../../shared/shared.module';

import {
  YeaChartWidgetComponent,
  YeaChartWidgetHeaderActionsDirective,
  YeaChartWidgetHeaderSubTitleDirective,
  YeaChartWidgetHeaderTitleDirective,
  YeaChartWidgetContentComponent,
  YeaChartWidgetHeaderComponent

} from './chart-widget.component';

const chartWidgetComponents = [
  YeaChartWidgetComponent,
  YeaChartWidgetHeaderTitleDirective,
  YeaChartWidgetHeaderComponent,
  YeaChartWidgetHeaderSubTitleDirective,
  YeaChartWidgetHeaderActionsDirective,
  YeaChartWidgetContentComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [...chartWidgetComponents],
  exports: [...chartWidgetComponents, SharedModule]
})
export class YeaChartWidgetModule {
}
