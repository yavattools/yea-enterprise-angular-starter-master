import { AppState } from '../../app-root';
import { HeadItem, SubHeadItem } from './app-common.models';

export const APP_CONTEXT_KEY = 'app-context';

export interface AppContext {
  unitNames: Array<any>;
  divisons: Array<any>;
  esHeadItems: Array<HeadItem>;
  ebsSubHeadItems: Array<SubHeadItem>;
  firmNames: Array<any>;
  months: Array<any>;
  appActionInProgress: boolean;
}

export interface AppContextState {
  unitNames: Array<any>;
  divisons: Array<any>;
  esHeadItems: Array<HeadItem>;
  esSubHeadItems: Array<SubHeadItem>;
  months: Array<any>;
  firmNames: Array<any>;
  currencyTypes: Array<any>;
  appActionInProgress: boolean;
}

export interface State extends AppState {
  appContext: AppContextState;
}
