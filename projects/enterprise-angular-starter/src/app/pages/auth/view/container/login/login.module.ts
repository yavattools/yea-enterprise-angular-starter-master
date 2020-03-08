import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
// import { yeaAspectRatioModule } from '@app/core/directives';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    // LoginRoutingModule,
    SharedModule,
    ReactiveFormsModule
    // yeaAspectRatioModule
  ],
  declarations: [],
  exports: [
    SharedModule
    // yeaAspectRatioModule
  ]
})
export class LoginModule {}
