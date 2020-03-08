import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthStoreModule } from './store';
import { SharedModule } from '@app/shared/shared.module';
// import { yeaAspectRatioModule } from '@app/core/directives';
import {
  allContainerComponents,
  allPresComponents,
  allModelComponents,
  DialogAddressModule
} from './view';
import { AuthRoutingModule } from './auth.routes';
import { UserIdleService, UserIdleWatchService } from './view/provider';
// import { SettingsModule } from '../settings/settings.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InAuthenticateService } from './service/auth-in-memory-db-api';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AuthStoreModule,
    // yeaAspectRatioModule,
    // SettingsModule,
    // HttpClientInMemoryWebApiModule.forFeature(InAuthenticateService),
    AuthRoutingModule,
    DialogAddressModule
  ],
  declarations: [
    ...allContainerComponents,
    ...allPresComponents,
    ...allModelComponents
  ],
  exports: [
    SharedModule,
    // SettingsModule,

    // AuthStoreModule,
    // yeaAspectRatioModule,
    ...allModelComponents
  ],
  entryComponents: [...allModelComponents],
  providers: [UserIdleService, UserIdleWatchService]
})
export class AuthenticationModule {}
