import { createSelector, createFeatureSelector } from '@ngrx/store';

import { SettingsState } from '../reducers/settings.state';
import { State, SettingsStateData } from '../../model/settings.model';

export const selectSettingsState = createFeatureSelector<
  State,
  SettingsStateData
>('settings');

export const selectSettings = createSelector(
  selectSettingsState,
  (state: SettingsStateData) => state
);

export const selectSettingsStickyHeader = createSelector(
  selectSettings,
  (state: SettingsStateData) => state.stickyHeader
);

export const selectSettingsLanguage = createSelector(
  selectSettings,
  (state: SettingsStateData) => state.language
);

export const selectTheme = createSelector(
  selectSettings,
  settings => settings.theme
);

export const selectPageAnimations = createSelector(
  selectSettings,
  settings => settings.pageAnimations
);

export const selectElementsAnimations = createSelector(
  selectSettings,
  settings => settings.elementsAnimations
);

export const selectAutoNightMode = createSelector(
  selectSettings,
  settings => settings.autoNightMode
);

export const selectNightTheme = createSelector(
  selectSettings,
  settings => settings.nightTheme
);

export const selectHour = createSelector(
  selectSettings,
  settings => settings.hour
);

export const selectIsNightHour = createSelector(
  selectAutoNightMode,
  selectHour,
  (autoNightMode, hour) => autoNightMode && (hour >= 21 || hour <= 7)
);

export const selectEffectiveTheme = createSelector(
  selectTheme,
  selectNightTheme,
  selectIsNightHour,
  (theme, nightTheme, isNightHour) =>
    (isNightHour ? nightTheme : theme).toLowerCase()
);
