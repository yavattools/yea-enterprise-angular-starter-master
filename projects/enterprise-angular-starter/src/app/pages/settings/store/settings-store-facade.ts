import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as fromActions from './actions';
import * as fromReducers from './reducers';
import * as fromSelectors from './selectors';

// @Injectable({ providedIn: 'root' })
@Injectable()
export class SettingsStoreFacade {
  public stickyHeader$: Observable<boolean>;
  public language$: Observable<string>;
  public theme$: Observable<string>;

  constructor(
    private store: Store<fromReducers.SettingsState>,
    private router: Router
  ) {
    this.stickyHeader$ = this.store.pipe(
      select(fromSelectors.selectSettingsStickyHeader)
    );
    this.language$ = this.store.pipe(
      select(fromSelectors.selectSettingsLanguage)
    );
    this.theme$ = this.store.pipe(select(fromSelectors.selectEffectiveTheme));
  }
}
