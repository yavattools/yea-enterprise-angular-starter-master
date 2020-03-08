import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { YeaCardModule } from '@app/core/component/card';
import { SharedModule } from '@app/shared/shared.module';
import { RealtimeUsersWidgetComponent } from './realtime-users-widget.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    // Core
    YeaCardModule
  ],
  declarations: [RealtimeUsersWidgetComponent],
  exports: [RealtimeUsersWidgetComponent]
})
export class RealtimeUsersWidgetModule {}
