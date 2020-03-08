import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { MarketWidgetComponent } from './market-widget.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [MarketWidgetComponent],
  exports: [MarketWidgetComponent]
})
export class MarketWidgetModule {}
