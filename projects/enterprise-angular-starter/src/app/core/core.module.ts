import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from '../../environments/environment';

import { AppState, selectRouterState } from './store/app-root';
import {
  ROUTE_ANIMATIONS_ELEMENTS,
  routeAnimations
} from './providers/animations/route.animations';
import {
  AccountService,
  AnimationsService,
  AppErrorHandler,
  HttpWrapperService,
  httpInterceptorProviders,
  LocalStorageService,
  LoggerService,
  MediaQueryService,
  InCredentialsService,
  NotificationService,
  TitleService,
  AppConstantsService,
  WebWorkerService,
  ScreenService,
  WindowRefService
} from './providers';

import { AppStoreModule, AppContextStoreModule } from './store';
import { yeaSnackBarModule } from './utilities';
import { yeaAppActionProgressModule } from './component/app-action-progress';
import {
  LoadingIndicatorModule,
  PendingInterceptorModule
} from './component/loading-indicator';
import { LoadingOverlayModule } from './component/loading-overlay';

export {
  TitleService,
  routeAnimations,
  AppState,
  LocalStorageService,
  ROUTE_ANIMATIONS_ELEMENTS,
  AnimationsService,
  selectRouterState,
  NotificationService
};

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/`,
    '.json'
  );
}

@NgModule({
  imports: [
    // angular
    CommonModule,
    HttpClientModule,

    LoadingIndicatorModule,
    PendingInterceptorModule,
    LoadingOverlayModule,
    yeaAppActionProgressModule,

    yeaSnackBarModule,
    // yeaToastModule.forRoot(),

    // ngrx
    AppStoreModule,
    AppContextStoreModule,
    EffectsModule.forRoot([
      // AuthEffects,
    ]),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({
          name: 'Angular NgRx Material Starter'
        }),

    // 3rd party
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler },
    AppConstantsService,
    AccountService,
    AnimationsService,
    AppErrorHandler,
    HttpWrapperService,
    httpInterceptorProviders,
    LocalStorageService,
    MediaQueryService,
    InCredentialsService,
    NotificationService,
    LoggerService,
    TitleService,
    WebWorkerService,
    WindowRefService,
    ScreenService
  ],
  exports: [TranslateModule]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
