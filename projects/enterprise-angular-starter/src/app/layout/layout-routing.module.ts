import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './layout-container/layout.component';
import { AuthGuardService } from '@app/pages/auth/service';
import { LoginComponent, SignComponent } from '@app/pages/auth/view';
import { SettingsContainerComponent } from '@app/pages/settings/view/settings-container.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
      },

      {
        path: 'student-list',
        canActivate: [AuthGuardService],
        loadChildren: () =>
          import('../pages/student-list/student-list.module').then(
            m => m.StudentListModule
          )
      },
      {
        path: 'student-details',
        canActivate: [AuthGuardService],
        loadChildren: () =>
          import('../pages/student/student.module').then(m => m.StudentModule)
      },
      {
        path: 'settings',
        canActivate: [AuthGuardService],
        component: SettingsContainerComponent
        // loadChildren: () =>
        //   import('../pages/settings/settings.module').then(
        //     m => m.SettingsModule
        //   )
      },
      {
        path: 'dashboard',
        canActivate: [AuthGuardService],
        loadChildren: () =>
          import('../pages/dashboard/dashboard.module').then(
            m => m.DashboardModule
          )
      },
      {
        path: 'auth',
        component: SignComponent
        // loadChildren: () =>
        // import('../pages/auth/auth.module').then(m => m.AuthenticationModule)
      },
      {
        path: 'about',
        canActivate: [AuthGuardService],
        loadChildren: () =>
          import('../pages/about/about.module').then(m => m.AboutModule)
      },
      {
        path: '**',
        redirectTo: 'feature-list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
