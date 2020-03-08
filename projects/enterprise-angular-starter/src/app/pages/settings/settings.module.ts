import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../../shared/shared.module';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsContainerComponent } from './view/settings-container.component';
import { settingsReducer } from './store/reducers/settings.reducer';
import { SettingsEffects } from './store/effects/settings.effects';
import { SettingsStoreModule } from './store/settings-store.module';
import { SettingsStoreFacade } from './store/settings-store-facade';

@NgModule({
  declarations: [SettingsContainerComponent],
  imports: [
    CommonModule,
    SharedModule,
    SettingsRoutingModule,
    SettingsStoreModule
  ],
  providers: [SettingsStoreFacade]
})
export class SettingsModule {}
