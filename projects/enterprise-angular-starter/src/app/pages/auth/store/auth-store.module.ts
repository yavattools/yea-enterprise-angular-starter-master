import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { effects } from './effects';
import { reducers } from './reducers';
import { AuthService } from '../service/auth.service';
import { AuthGuardService } from '../service/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [],
  providers: [
    AuthService
    // AuthGuardService
  ]
})
export class AuthStoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: AuthStoreModule
  ) {
    if (parentModule) {
      throw new Error(
        'AuthStoreModule is already loaded. Import only in AppModule'
      );
    } else {
      // this.facade.establishSignalRConnection();
    }
  }
}
