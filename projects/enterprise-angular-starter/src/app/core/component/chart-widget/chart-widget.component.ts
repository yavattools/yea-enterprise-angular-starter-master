import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ViewEncapsulation
} from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core/providers';

@Component({
  selector: 'yea-chart-widget',
  templateUrl: './chart-widget.component.html',
  styleUrls: ['./chart-widget.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'yea-chart-widget' }
})
export class YeaChartWidgetComponent {
  public routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
}

@Component({
  selector: 'yea-chart-widget-header',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'yea-chart-widget-header' },
  template: `
    <div
      class="yea-chart-widget-header-title-group"
      [ngClass]="routeAnimationsElements"
    >
      <ng-content
        select="yea-chart-widget-header-title"
        [ngClass]="routeAnimationsElements"
      ></ng-content>
      <ng-content
        select="yea-chart-widget-header-sub-title"
        [ngClass]="routeAnimationsElements"
      ></ng-content>
    </div>
    <ng-content
      select="yea-chart-widget-header-actions"
      [ngClass]="routeAnimationsElements"
    ></ng-content>
  `
})
export class YeaChartWidgetHeaderComponent {
  public routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
}

@Directive({
  selector: 'yea-chart-widget-header-title',
  host: { class: 'yea-chart-widget-header-title' }
})
export class YeaChartWidgetHeaderTitleDirective {
  public routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
}

@Directive({
  selector: 'yea-chart-widget-header-sub-title',
  host: { class: 'yea-chart-widget-header-sub-title' }
})
export class YeaChartWidgetHeaderSubTitleDirective {
  public routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
}

@Directive({
  selector: 'yea-chart-widget-header-actions',
  host: { class: 'yea-chart-widget-header-actions' }
})
export class YeaChartWidgetHeaderActionsDirective {
  public routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
}

@Component({
  selector: 'yea-chart-widget-content',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'yea-chart-widget-content' },
  template: `
    <ng-content [ngClass]="routeAnimationsElements"></ng-content>
  `
})
export class YeaChartWidgetContentComponent {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
}
