import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { storeFreeze } from 'ngrx-store-freeze';
import {
  RouterStateSerializer,
  StoreRouterConnectingModule,
} from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../../environments/environment';
import { debug } from './reducers';
import { CustomSerializer } from './router';
import {reducers,  metaReducers } from './root.state';

if (!environment.production) {
  metaReducers.unshift(debug, storeFreeze);
}

@NgModule({
  imports: [
    // angular
    CommonModule,

    // ngrx
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),

     /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */ environment.production
      ? []
      : StoreDevtoolsModule.instrument({
          name: 'YE Angular Starter Store App'
        }),

  ],
  declarations: [],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer }
  ],
  exports: [ ]
})
export class AppStoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: AppStoreModule
  ) {
    if (parentModule) {
      throw new Error('AppStoreModule is already loaded. Import only in AppModule');
    }
  }
}
