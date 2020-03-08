import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromAppContextReducer from '../reducers/app-context.reducer';

export const getCompleteAppContextState = createSelector(
  fromFeature.selectorAppContextDataState,
  (state: fromAppContextReducer.AppContextReducerState) =>
    state.appContextDataState
);

export const getUnitNames = createSelector(
  getCompleteAppContextState,
  fromAppContextReducer.getUnitNames
);
export const getDivisons = createSelector(
  getCompleteAppContextState,
  fromAppContextReducer.getDivisons
);
export const getESHeaditems = createSelector(
  getCompleteAppContextState,
  fromAppContextReducer.getESHeadItems
);
export const getESSubHeadItems = createSelector(
  getCompleteAppContextState,
  fromAppContextReducer.getESSubheadItems
);
export const getMonths = createSelector(
  getCompleteAppContextState,
  fromAppContextReducer.getMonths
);
export const getCurrencyTypes = createSelector(
  getCompleteAppContextState,
  fromAppContextReducer.getCurrencyTypes
);
export const getAppActionInProgress = createSelector(
  getCompleteAppContextState,
  fromAppContextReducer.getActionInProgress
);
