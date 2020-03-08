import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { effects } from './effects/settings.effects';
import { settingsReducer } from './reducers/settings.reducer';
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
// import { SettingsStoreFacade } from './settings-store-facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('settings', settingsReducer),
    EffectsModule.forFeature(effects)
  ],
  declarations: [],
  providers: [
    // SettingsStoreFacade
  ]
})
export class SettingsStoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: SettingsStoreModule
  ) {
    if (parentModule) {
      throw new Error(
        'SettingsStoreModule is already loaded. Import only in AppModule'
      );
    } else {
      // this.facade.establishSignalRConnection();
    }
  }
}
