import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

// import { ScrollbarModule } from '../common/scrollbar/scrollbar.module';
import { SidenavItemComponent } from './sidenav-item/sidenav-item.component';
import { SidenavComponent } from './sidenav.component';
import { SidenavService } from './sidenav.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
    // ScrollbarModule
  ],
  declarations: [SidenavComponent, SidenavItemComponent],
  exports: [SharedModule],
  providers: [SidenavService]
})
export class SidenavModule {}
