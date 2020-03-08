// import { async, ComponentFixture, TestBed, inject, tick } from '@angular/core/testing';
// import { TestsModule } from '../../../shared/modules/tests.module';
// import { SimpleChanges } from '@angular/core';
// import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

// import { DialogAssignLaunchManager } from './assign-launch-manager';
// import { MatDialogRef } from '@angular/material/dialog';
// import { AppContext } from '../../../core/models/common/app.context.model';
// import { AppConstantsService } from '../../../core/models/common/app.constant.model';
// import { LaunchManagers } from '../../../../assets/mock_data/launch-managers';
// import {Observable} from 'rxjs/Rx';
// import { WorklistService } from '../../../core/services/feature/worklist/worklist.service';
// import { WorkListItemWorkerService } from '../../../shared/worker/worklist.worker';
// import { Broadcaster } from '../../../shared/service/broadcaster.service';

// import 'rxjs/add/observable/of';

// export class MockLaunchManager {
//     getLaunchManagers = jasmine.createSpy('getLaunchManagers').and.callFake(
//       this.fakedgetLaunchManagers
//   );
//   fakedgetLaunchManagers():Observable<any> {
//       //console.log("inside faked lm ");
//           return Observable.of(new Object(LaunchManagers))
//           .map(psResult => JSON.parse(JSON.stringify(psResult)));
//         }

//     }
// export class MockDialogref{
//     close =  jasmine.createSpy('close').and.callFake(
//         this.fakedCloseDialog
//     );

//     fakedCloseDialog():void{
//       //console.log("dialogClosed");
//     }
// }

// describe('DialogAssignLaunchManager', () => {
//     let component: DialogAssignLaunchManager;
//     let fixture: ComponentFixture<DialogAssignLaunchManager>;
//     let originalTimeout: any;
//     let launchManager:any;
//     let context:AppContext;
//     let constants:AppConstantsService;
//     let snackBar: MatSnackBar;
//     let dialogRef: MatDialogRef<DialogAssignLaunchManager>;
//     let _workListWorkerService:WorkListItemWorkerService;
//     let _worklistService:WorklistService;
//     let broadcaster: Broadcaster;

//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//           declarations: [ DialogAssignLaunchManager ],
//           imports:[ TestsModule],
//           providers:[
//             {provide: MatDialogRef, useClass:MockDialogref},
//             {provide : WorklistService, useClass: MockLaunchManager}
//              ]
//         })
//         .compileComponents();
//       }));
//       beforeEach(() => {
//         fixture = TestBed.createComponent(DialogAssignLaunchManager);
//         component = fixture.componentInstance;
//         launchManager = fixture.debugElement.injector.get(WorklistService);

//         context = fixture.debugElement.injector.get(AppContext);
//         constants = fixture.debugElement.injector.get(AppConstantsService);
//         snackBar = fixture.debugElement.injector.get(MatSnackBar);
//         dialogRef = fixture.debugElement.injector.get(MatDialogRef);
//         _workListWorkerService = fixture.debugElement.injector.get(WorkListItemWorkerService);
//         _worklistService = fixture.debugElement.injector.get(WorklistService);
//         broadcaster = fixture.debugElement.injector.get(Broadcaster);

//         fixture.detectChanges();
//       });
//       it('should create', () => {
//         expect(component).toBeTruthy();
//       });

//     //   it('should ngOnInit', () => {

//     //     component.ngOnInit();
//     //     expect(component).toBeTruthy();
//     //   });
//     //   it('should load Launch Managers',() =>{
//     //         this._authUtilService.userIsLR();
//     //         component.loadLaunchManagers();
//     //         expect(component.launchmanagers).toBeTruthy();
//     //         component.launchManagerAssigned = component.launchManagerList[2];
//     //         expect(component.launchManagerAssigned).toBe("Nina Carter");
//     //   });

//     //   it ('should isReviewCompleted_checked',()=>{
//     //       component.isReviewCompleted(true);
//     //       expect(component.reviewChecked).toBe(true);
//     //   });

//     //   it ('should isReviewCompleted_unchecked',()=>{
//     //       component.isReviewCompleted(false);
//     //       expect(component.reviewChecked).toBe(false);
//     //   });

//     //   it('should Assign Launch Manager', () => {
//     //         component.launchManagerAssigned = component.launchManagerList[1];
//     //         component.reviewChecked = true;
//     //         component.notesForLaunchManagerAssigned = "Assign LM completed";
//     //         component.launchManagerAssignement();
//     //         expect(component.data[0]).toBe("David Ayres");
//     //         expect(component.data[1]).toBe(true);
//     //         expect(component.data[2]).toMatch("Assign LM completed");
//     //   });
// });
