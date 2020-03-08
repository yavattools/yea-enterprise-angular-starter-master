import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { QuickInfoWidgetComponent } from './quick-info-widget.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [QuickInfoWidgetComponent],
  exports: [QuickInfoWidgetComponent]
})
export class QuickInfoWidgetModule {}
