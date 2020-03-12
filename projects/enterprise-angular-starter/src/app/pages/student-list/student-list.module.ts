import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentListRoutingModule } from './student-list-routing.module';

@NgModule({
  declarations: [StudentListComponent, StudentComponent],
  imports: [CommonModule, SharedModule, StudentListRoutingModule]
})
export class StudentListModule {}
