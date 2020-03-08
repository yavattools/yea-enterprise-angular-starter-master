import * as appContextActions from '../actions/app-context.actions';
import { AppContext, AppContextState } from '../../model';

import { State } from '@ngrx/store';

export interface AppContextReducerState {
  appContextDataState: AppContextState;
}

export const initialState: AppContextState = {
  unitNames: [],
  divisons: [],
  esHeadItems: [],
  esSubHeadItems: [],
  firmNames: [],
  months: [
    {
      abbreviation: 'Jan',
      name: 'January'
    },
    {
      abbreviation: 'Feb',
      name: 'February'
    },
    {
      abbreviation: 'Mar',
      name: 'March'
    },
    {
      abbreviation: 'Apr',
      name: 'April'
    },
    {
      abbreviation: 'May',
      name: 'May'
    },
    {
      abbreviation: 'Jun',
      name: 'June'
    },
    {
      abbreviation: 'Jul',
      name: 'July'
    },
    {
      abbreviation: 'Aug',
      name: 'August'
    },
    {
      abbreviation: 'Sep',
      name: 'September'
    },
    {
      abbreviation: 'Oct',
      name: 'October'
    },
    {
      abbreviation: 'Nov',
      name: 'November'
    },
    {
      abbreviation: 'Dec',
      name: 'December'
    }
  ],
  currencyTypes: [],
  appActionInProgress: false
};

export function appContextDataReducer(
  state: AppContextState = initialState,
  action: appContextActions.AppContextActions
): AppContextState {
  switch (action.type) {
    case appContextActions.AppContextActionTypes
      .APPCONTEXT_LOAD_UNIT_NAMES_SUCCESS:
      return { ...state, firmNames: action.unitNames };

    case appContextActions.AppContextActionTypes
      .APPCONTEXT_LOAD_DIVISONS_SUCCESS:
      return { ...state, divisons: action.divisions };

    case appContextActions.AppContextActionTypes
      .APPCONTEXT_LOAD_CURRENCY_TYPES_SUCCESS:
      return { ...state, currencyTypes: action.currencyTypes };

    case appContextActions.AppContextActionTypes
      .APPCONTEXT_SHOW_ACTION_IN_PROGRESS:
      return { ...state, appActionInProgress: true };

    case appContextActions.AppContextActionTypes
      .APPCONTEXT_HIDE_ACTION_IN_PROGRESS:
      return { ...state, appActionInProgress: false };

    case appContextActions.AppContextActionTypes.ES_LOAD_HEADITEMS_SUCCESS:
      return { ...state, esHeadItems: action.headItems };

    case appContextActions.AppContextActionTypes.ES_LOAD_SUB_HEADITEMS_SUCCESS:
      return { ...state, esSubHeadItems: action.subHeadItems };

    default:
      return state;
  }
}

export const selectorAppContextState = state =>
  <AppContextState>(state || { currentFFLOW: {} });
export const getUnitNames = (state: AppContextState) => state.firmNames;
export const getDivisons = (state: AppContextState) => state.divisons;
export const getESHeadItems = (state: AppContextState) => state.esHeadItems;
export const getESSubheadItems = (state: AppContextState) =>
  state.esSubHeadItems;
export const getMonths = (state: AppContextState) => state.months;
export const getCurrencyTypes = (state: AppContextState) => state.currencyTypes;
export const getActionInProgress = (state: AppContextState) =>
  state.appActionInProgress;
