import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core/core.module';

import { Student, students } from '../student-list.data';
import { Router } from '@angular/router';

@Component({
  selector: 'yea-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentListComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  students: Student[] = students;

  selectedPairs: any = '';

  public filters: Array<any> = [
    { grade: 'Pre K', value: 0 },
    { grade: 'Kindergarden', value: 1 },
    { name: '1st Grade', value: 2 },
    { name: '2nd Grade', value: 3 },
    { name: '3rd Grade', value: 4 },
    { name: '4th Grade', value: 5 },
    { name: '5th Grade', value: 6 },
    { name: '6th Grade', value: 7 }
  ];
  public selectedFilters: any = [
    'Pre K',
    'Kindergarden',
    '1st Grade',
    '2nd Grade',
    '3rd Grade',
    '4th Grade',
    '5th Grade',
    '6th Grade'
  ];

  constructor(public router: Router) {}

  ngOnInit() {}

  openLink(link: string) {
    window.open(link, '_blank');
  }

  gotoStudentDetails($event, sidenav:any) {
    sidenav.open();
    // this.router.navigateByUrl('/pages/student-details');
  }

  getPersonalBioClass(meeting) {
    let result = 'show-gray';

    return result;
  }

  getStudentStatus(student: Student) {
    let result = 'show-card-silver';

    // if(feature.isBusiness == 0 && feature.isFinancial === 0 && feature.isPersonal === 0){
    //   result = 'show-card-silver';
    // }else if(feature.isBusiness == 3 && feature.isFinancial === 3 && feature.isPersonal === 3){
    //   result = 'show-card-green';
    // }else if(feature.isBusiness == 2 && feature.isFinancial === 2 && feature.isPersonal === 2){
    //   result = 'show-card-blue';
    // }else{
    //   result = 'show-card-orangered';
    // }

    return result;
  }

  filterChangehandler($event) {}
}
