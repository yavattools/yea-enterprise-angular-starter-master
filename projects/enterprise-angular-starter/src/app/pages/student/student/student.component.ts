import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core/core.module';

import { Student, student } from '../student.data';

@Component({
  selector: 'yea-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  selectedStudent: Student = student;

  ngOnInit() {}

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
