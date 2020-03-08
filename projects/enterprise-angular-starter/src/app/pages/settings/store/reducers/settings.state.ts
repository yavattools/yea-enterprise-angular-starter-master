import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromSettingsModel from '../../model/settings.model';
import * as fromSettings from './settings.reducer';

export interface SettingsState {
  settings: fromSettingsModel.SettingsStateData;
}

export const reducers: ActionReducerMap<SettingsState> = {
  settings: fromSettings.settingsReducer
};

export const selectorSettings = createFeatureSelector<SettingsState>(
  'settings'
);
