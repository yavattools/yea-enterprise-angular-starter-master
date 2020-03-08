import { Injectable } from '@angular/core';

export const APP_CONTEXT = '';
export const APP_ID = 'yea';

export class SnackTypes {
  public SUCCESS: string;
  public ERROR: string;
  public INFO: string;
  public WARNING: string;

  constructor() {
    this.ERROR = 'error';
    this.SUCCESS = 'success';
    this.INFO = 'info';
    this.WARNING = 'warning';
  }
}

export class EmployeeProfileType {
  public FIN_MANAGER: string;
  public ACCOUNTANT: string;

  constructor() {
    this.FIN_MANAGER = 'FIN_MANAGER';
    this.ACCOUNTANT = 'ACCOUNTANT';
  }
}

@Injectable()
export class AppConstantsService {
  public CONFIG_URL: string;
  public TEST_CONNECTION: string;
  public BASE_API_URL: string;
  public SIGN_IN_URL: string;
  public GET_ACCOUNT_INFO_URL: string;
  public GET_EMPLOYEE_PROFILE_URL: string;
  public TOKEN_REFRESH_URL: string;

  public LOAD_UNIT_NAMES: string;
  public LOAD_DIVISONS: string;
  public LOAD_CURRENCY_TYPES: string;

  public LOAD_ES_HEADITEMS: string;
  public LOAD_ES_SUB_HEADITEMS: string;

  public ES_SAVE_CHANGES: string;
  public ES_UPDATE_CHANGES: string;
  public ES_ADD_SCHEDULE_ITEM: string;
  public ES_REMOVE_SCHEDULE_ITEM: string;
  public ES_GET_REPORT_BY_MONTH: string;
  public ES_GET_REPORT_BY_MONTH_AND_yeaR: string;
  public ES_GET_REPORT_BY_MONTH_AND_yeaR_AND_DIVISON_CODE: string;
  public ES_GET_REPORT_BY_MONTH_UNITCODE_AND_yeaR: string;
  public ES_GET_DEFAULT_REPORT_LINE_ITEMS: string;

  public snackbarType: SnackTypes;
  public employeeProfileType: EmployeeProfileType;

  constructor() {
    this.CONFIG_URL = 'assets/config/web.config.json';
    this.BASE_API_URL = 'http://localhost:8080';

    this.SIGN_IN_URL =
      (APP_CONTEXT ? '/' : '') + APP_CONTEXT + '/api/authenticate';
    this.GET_ACCOUNT_INFO_URL =
      (APP_CONTEXT ? '/' : '') + APP_CONTEXT + '/api/account';
    this.GET_EMPLOYEE_PROFILE_URL =
      (APP_CONTEXT ? '/' : '') +
      APP_CONTEXT +
      '/api/getEmployeeProfileById';

    this.TOKEN_REFRESH_URL = APP_CONTEXT
      ? '/'
      : '' + APP_CONTEXT + '/api/account/refreshToken';

    this.LOAD_UNIT_NAMES = APP_CONTEXT
      ? '/'
      : '' + APP_CONTEXT + '/api/companyDetails';
    this.LOAD_DIVISONS = APP_CONTEXT
      ? '/'
      : '' + APP_CONTEXT + '/api/divisions';

    this.LOAD_CURRENCY_TYPES = APP_CONTEXT
      ? '/'
      : '' + APP_CONTEXT + '/api/mis-currencies';
    this.ES_GET_DEFAULT_REPORT_LINE_ITEMS =
      (APP_CONTEXT ? '/' : '') + APP_CONTEXT + '/api/balanceSheets';

    this.snackbarType = new SnackTypes();
    this.employeeProfileType = new EmployeeProfileType();
  }
}
