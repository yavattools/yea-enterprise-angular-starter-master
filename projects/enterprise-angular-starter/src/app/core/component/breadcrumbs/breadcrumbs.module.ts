import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule  } from '../../../shared/shared.module';
import { BreadcrumbsComponent } from './breadcrumbs.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  declarations: [BreadcrumbsComponent],
  exports: [BreadcrumbsComponent, SharedModule]
})
export class BreadcrumbsModule {
}
