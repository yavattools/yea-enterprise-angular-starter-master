    
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';
import { appContextReducers } from './store/reducers';
import { ModuleWithProviders, NgModule, Optional, SkipSelf  } from '@angular/core';
import { APP_CONTEXT_KEY } from './model';
import { AppCommonDataService } from './service';
import { AppContextStoreFacade } from './store/app-context-store-facade';
import { MetaReducer, StoreModule } from '@ngrx/store';

@NgModule({
  imports: [

    CommonModule,

    StoreModule.forFeature(APP_CONTEXT_KEY, appContextReducers),
    EffectsModule.forFeature(effects),

  ],
  providers: [
    AppContextStoreFacade,
    AppCommonDataService
  ]
 
})
export class AppContextStoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: AppContextStoreModule
    ) {
      if (parentModule) {
      throw new Error('SettingsStoreModule is already loaded. Import only in AppModule');
    }else{
      // this.facade.establishSignalRConnection();
    }
  }
  
 }
