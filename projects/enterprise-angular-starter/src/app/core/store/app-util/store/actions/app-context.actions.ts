import { Action } from '@ngrx/store';
import {
  AppContext,
  APP_CONTEXT_KEY,
  HeadItem,
  SubHeadItem
} from '../../model';

export enum AppContextActionTypes {
  APPCONTEXT_LOAD_UNIT_NAMES = '[APPCONTEXT] Load Unit Names',
  APPCONTEXT_LOAD_UNIT_NAMES_SUCCESS = '[APPCONTEXT] Load Unit Names Success',
  APPCONTEXT_LOAD_UNIT_NAMES_FAILURE = '[APPCONTEXT] Load Unit Names Failure',

  APPCONTEXT_LOAD_DIVISONS = '[APPCONTEXT] Load DIVISONS',
  APPCONTEXT_LOAD_DIVISONS_SUCCESS = '[APPCONTEXT] Load DIVISONS Success',
  APPCONTEXT_LOAD_DIVISONS_FAILURE = '[APPCONTEXT] Load DIVISONS Failure',

  APPCONTEXT_LOAD_CURRENCY_TYPES = '[APPCONTEXT] Load Currency Types',
  APPCONTEXT_LOAD_CURRENCY_TYPES_SUCCESS = '[APPCONTEXT] Load Currency Types Success',
  APPCONTEXT_LOAD_CURRENCY_TYPES_FAILURE = '[APPCONTEXT] Load Currency Types Failure',

  ES_LOAD_HEADITEMS = '[ExcelSheet] Load Head Items',
  ES_LOAD_HEADITEMS_SUCCESS = '[ExcelSheet] Load Head Items Success',
  ES_LOAD_HEADITEMS_FAILURE = '[ExcelSheet] Load Head Items Failure',

  ES_LOAD_SUB_HEADITEMS = '[ExcelSheet] Load Sub Head Items',
  ES_LOAD_SUB_HEADITEMS_SUCCESS = '[ExcelSheet] Load Sub Head Items Success',
  ES_LOAD_SUB_HEADITEMS_FAILURE = '[ExcelSheet] Load Sub Head Items Failure',

  APPCONTEXT_SHOW_ACTION_IN_PROGRESS = '[APPCONTEXT] Show Action In Progress',
  APPCONTEXT_HIDE_ACTION_IN_PROGRESS = '[APPCONTEXT] Hide Action In Progress'
}

export class AppContextLoadUnitNames implements Action {
  readonly type = AppContextActionTypes.APPCONTEXT_LOAD_UNIT_NAMES;
  constructor() {}
}

export class AppContextLoadUnitNamesSuccess implements Action {
  readonly type = AppContextActionTypes.APPCONTEXT_LOAD_UNIT_NAMES_SUCCESS;
  constructor(public unitNames: Array<any>) {
    console.log('actions:' + this.unitNames);
  }
}

export class AppContextLoadUnitNamesFailure implements Action {
  readonly type = AppContextActionTypes.APPCONTEXT_LOAD_UNIT_NAMES_FAILURE;
  constructor(public payload: any) {}
}

export class AppContextLoadDivisons implements Action {
  readonly type = AppContextActionTypes.APPCONTEXT_LOAD_DIVISONS;
  constructor() {}
}

export class AppContextLoadDivisonsSuccess implements Action {
  readonly type = AppContextActionTypes.APPCONTEXT_LOAD_DIVISONS_SUCCESS;
  constructor(public divisions: Array<any>) {
    console.log('actions:' + this.divisions);
  }
}

export class AppContextLoadDivisonsFailure implements Action {
  readonly type = AppContextActionTypes.APPCONTEXT_LOAD_DIVISONS_FAILURE;
  constructor(public payload: any) {}
}

export class AppContextLoadCurrencyTypes implements Action {
  readonly type = AppContextActionTypes.APPCONTEXT_LOAD_CURRENCY_TYPES;
  constructor() {}
}

export class AppContextLoadCurrencyTypesSuccess implements Action {
  readonly type = AppContextActionTypes.APPCONTEXT_LOAD_CURRENCY_TYPES_SUCCESS;
  constructor(public currencyTypes: Array<any>) {
    console.log('actions:' + this.currencyTypes);
  }
}

export class AppContextLoadCurrencyTypesFailure implements Action {
  readonly type = AppContextActionTypes.APPCONTEXT_LOAD_CURRENCY_TYPES_FAILURE;
  constructor(public payload: any) {}
}

export class AppContextShowActionInProgressAction implements Action {
  readonly type = AppContextActionTypes.APPCONTEXT_SHOW_ACTION_IN_PROGRESS;
  constructor() {}
}

export class AppContextHideActionInProgressAction implements Action {
  readonly type = AppContextActionTypes.APPCONTEXT_HIDE_ACTION_IN_PROGRESS;
  constructor() {}
}

export class ExcelSheetLoadHeadItems implements Action {
  readonly type = AppContextActionTypes.ES_LOAD_HEADITEMS;
  constructor() {}
}

export class ExcelSheetLoadHeadItemsSuccess implements Action {
  readonly type = AppContextActionTypes.ES_LOAD_HEADITEMS_SUCCESS;
  constructor(public headItems: Array<HeadItem>) {}
}

export class ExcelSheetLoadHeadItemsFailure implements Action {
  readonly type = AppContextActionTypes.ES_LOAD_HEADITEMS_FAILURE;
  constructor(public error: any) {}
}

export class ExcelSheetLoadSubHeadItems implements Action {
  readonly type = AppContextActionTypes.ES_LOAD_SUB_HEADITEMS;
  constructor() {}
}

export class ExcelSheetLoadSubHeadItemsSuccess implements Action {
  readonly type = AppContextActionTypes.ES_LOAD_SUB_HEADITEMS_SUCCESS;
  constructor(public subHeadItems: Array<SubHeadItem>) {}
}

export class ExcelSheetLoadSubHeadItemsFailure implements Action {
  readonly type = AppContextActionTypes.ES_LOAD_SUB_HEADITEMS_FAILURE;
  constructor(public error: any) {}
}

export type AppContextActions =
  | AppContextLoadUnitNames
  | AppContextLoadUnitNamesSuccess
  | AppContextLoadUnitNamesFailure
  | AppContextLoadCurrencyTypes
  | AppContextLoadDivisons
  | AppContextLoadDivisonsSuccess
  | AppContextLoadDivisonsFailure
  | AppContextLoadCurrencyTypesSuccess
  | AppContextLoadCurrencyTypesFailure
  | ExcelSheetLoadHeadItems
  | ExcelSheetLoadHeadItemsSuccess
  | ExcelSheetLoadHeadItemsFailure
  | ExcelSheetLoadSubHeadItems
  | ExcelSheetLoadSubHeadItemsSuccess
  | ExcelSheetLoadSubHeadItemsFailure
  | AppContextShowActionInProgressAction
  | AppContextHideActionInProgressAction;
