import { ChangeDetectionStrategy, Component, Directive, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'yea-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  host: { 'class': 'yea-card' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YeaCardComponent {
}

@Component({
  selector: 'yea-card-header',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'yea-card-header' },
  template: `
    <div class="yea-card-header-title-group">
      <ng-content select="yea-card-header-title"></ng-content>
      <ng-content select="yea-card-header-sub-title"></ng-content>
    </div>
    <ng-content></ng-content>
    <ng-content select="yea-card-header-actions"></ng-content>
  `
})
export class YeaCardHeaderComponent {
}

@Component({
  selector: 'yea-card-content',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'yea-card-content' },
  template: `
    <ng-content></ng-content>`
})
export class YeaCardContentComponent {
}

@Directive({
  selector: 'yea-card-header-title',
  host: { 'class': 'yea-card-header-title' }
})
export class YeaCardHeaderTitleDirective {
}

@Directive({
  selector: 'yea-card-header-sub-title',
  host: { 'class': 'yea-card-header-sub-title' }
})
export class YeaCardHeaderSubTitleDirective {
}

@Directive({
  selector: 'yea-card-header-actions',
  host: { 'class': 'yea-card-header-actions' }
})
export class YeaCardHeaderActionsDirective {
}

@Directive({
  selector: 'yea-card-actions',
  host: {
    'class': 'yea-card-actions',
    '[class.yea-card-actions-align-end]': 'align === "end"',
  }
})
export class YeaCardActionsDirective {
  @Input() align: 'start' | 'end' = 'start';
}
