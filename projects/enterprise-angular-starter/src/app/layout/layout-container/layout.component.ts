import { Store } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import browser from 'browser-detect';
import { TranslateService } from '@ngx-translate/core';

import { environment as env } from '@env/environment';

import {
  routeAnimations,
  AppState,
  LocalStorageService
} from '@app/core/core.module';

import { AppContextStoreFacade } from '@app/core/store';

import {
  actionSettingsChangeAnimationsPageDisabled,
  actionSettingsChangeLanguage
} from '@app/pages/settings/store/actions/settings.actions';

import { AuthStoreFacade } from '@app/pages/auth/store/auth-store-facade';
import { SettingsStoreFacade } from '@app/pages/settings/store/settings-store-facade';

declare var require: any;

@Component({
  selector: 'yea-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [routeAnimations]
})
export class LayoutComponent implements OnInit {
  public isProd = env.production;
  public envName = env.envName;
  public version = env.versions.app;
  public year = new Date().getFullYear();
  public logo = require('../../../assets/logo.png');
  public languages = ['en', 'de', 'sk', 'fr', 'es', 'pt-br', 'zh-cn', 'he'];
  public navigation = [
    {
      link: '/pages/about',
      label: 'yea.menu.about',
      icon: 'sentiment_satisfied_alt'
    },
    {
      link: '/pages/feature',
      label: 'yea.menu.features',
      icon: 'dashboard'
    }
  ];
  public navigationSideMenu = [
    ...this.navigation,
    { link: '/pages/settings', label: 'yea.menu.settings', icon: 'settings' }
  ];

  public top_navigation = [
    {
      route: '/pages/dashboard',
      label: 'yea.menu.dashboard',
      icon: 'dashboard',
      isSelected: true,
      tip: 'yea.menu.dashboard-tip'
    },
    {
      route: '/pages/student-list',
      label: 'yea.menu.reports',
      icon: 'subject',
      isSelected: false,
      tip: 'yea.menu.reports-tip'
    },
    {
      route: '/pages/student-list',
      label: 'yea.menu.tasklist',
      icon: 'school',
      isSelected: false,
      tip: 'yea.menu.tasklist-tip'
    },
    {
      route: '/pages/settings',
      label: 'yea.menu.settings',
      icon: 'settings',
      isSelected: false,
      tip: 'yea.menu.settings-tip'
    },
    {
      route: '/pages/profile',
      label: 'yea.menu.profile',
      icon: 'person',
      isSelected: false,
      tip: 'yea.menu.profile-tip'
    }
  ];

  public isAuthenticated$: Observable<boolean>;
  public stickyHeader$: Observable<boolean>;
  public language$: Observable<string>;
  public theme$: Observable<string>;
  public appActionInProgress$: Observable<boolean>;
  public pageTitle: any = 'Dashboard';

  constructor(
    private store: Store<AppState>,
    public translate: TranslateService,
    private authFacade: AuthStoreFacade,
    private settingsFacade: SettingsStoreFacade,
    private appContextFacade: AppContextStoreFacade,
    private storageService: LocalStorageService
  ) {
    this.isAuthenticated$ = authFacade.authenticated$;
  }

  private static isIEorEdgeOrSafari() {
    return ['ie', 'edge', 'safari'].includes(browser().name);
  }

  ngOnInit(): void {
    this.appActionInProgress$ = this.appContextFacade.appActionInProgress$;
    this.storageService.testLocalStorage();
    if (LayoutComponent.isIEorEdgeOrSafari()) {
      this.store.dispatch(
        actionSettingsChangeAnimationsPageDisabled({
          pageAnimationsDisabled: true
        })
      );
    }
    this.stickyHeader$ = this.settingsFacade.stickyHeader$;
    this.theme$ = this.settingsFacade.theme$;
    this.language$ = this.settingsFacade.language$;

    this.translate.use('en');
  }

  onLoginClick() {
    // this.store.dispatch(authLogin());
  }

  onLogoutClick() {
    // this.store.dispatch(authLogout());
  }

  onLanguageSelect({ value: language }) {
    this.store.dispatch(actionSettingsChangeLanguage({ language }));
  }

  public menuItemHandler($event, menuItem: any) {
    $event.stopPropagation();

    menuItem.isSelected = true;
    this.pageTitle = menuItem.label;

    this.top_navigation.forEach(item => {
      if (item.route !== menuItem.route) {
        item.isSelected = false;
      }
    });
    // this.router.navigateByUrl(menuItem.route);
  }
}
