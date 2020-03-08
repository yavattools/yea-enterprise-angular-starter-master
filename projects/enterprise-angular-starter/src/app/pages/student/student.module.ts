import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { StudentComponent } from './student/student.component';
import { StudentRoutingModule } from './student-routing.module';

@NgModule({
  declarations: [StudentComponent],
  imports: [CommonModule, SharedModule, StudentRoutingModule],
  exports: [StudentComponent]
})
export class StudentModule {
  constructor() {}
}
