import { CUSTOM_ELEMENTS_SCHEMA, NgModule, ErrorHandler } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LazyElementsModule } from '@angular-extensions/elements';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SharedModule } from '../shared/shared.module';
import { environment } from '../../environments/environment';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout-container/layout.component';
import { FooterModule } from './footer';
import { QuickpanelModule } from './quickpanel/quickpanel.module';
import { SidenavModule } from './sidenav';
import { ToolbarModule } from './toolbar/toolbar.module';
import { SettingsModule } from '@app/pages/settings/settings.module';
import { CustomSerializer } from '@app/core/store/app-root/router';
import { AppErrorHandler } from '@app/core/providers/error-handler/app-error-handler.service';
import { yeaAppActionProgressModule } from '@app/core/component/app-action-progress';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from '@ngrx/router-store';
import { AuthenticationModule } from '@app/pages/auth/auth.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/`,
    '.json'
  );
}

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    LazyElementsModule,
    SharedModule,
    LayoutRoutingModule,
    // Core
    ToolbarModule,
    QuickpanelModule,
    SidenavModule,
    FooterModule,
    yeaAppActionProgressModule,
    AuthenticationModule,
    SettingsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    })
  ],
  declarations: [LayoutComponent],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: RouterStateSerializer, useClass: CustomSerializer }
  ],
  exports: [LayoutComponent, TranslateModule, yeaAppActionProgressModule]
})
export class LayoutModule {
  constructor() {}
}
