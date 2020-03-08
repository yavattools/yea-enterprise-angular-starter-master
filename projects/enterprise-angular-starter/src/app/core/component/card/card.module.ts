import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  YeaCardComponent,
  YeaCardActionsDirective,
  YeaCardContentComponent,
  YeaCardHeaderComponent,
  YeaCardHeaderTitleDirective,
  YeaCardHeaderActionsDirective,
  YeaCardHeaderSubTitleDirective,
} from './card.component';

const cardComponents = [
  YeaCardComponent,
  YeaCardHeaderComponent,
  YeaCardHeaderTitleDirective,
  YeaCardHeaderSubTitleDirective,
  YeaCardHeaderActionsDirective,
  YeaCardContentComponent,
  YeaCardActionsDirective
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...cardComponents
  ],
  exports: [
    ...cardComponents
  ]
})
export class YeaCardModule {
}
