import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { CoreModule } from '@app/core/core.module';
import { AgmCoreModule } from '@agm/core';
import { environment } from '@env/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { SettingsModule } from '@app/pages/settings/settings.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; 
import { InAppService } from './app/app-in-memory-api';

@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,

    // core & shared
    CoreModule,
    SharedModule,
    // SettingsModule,

    // Google Maps Module
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsApiKey
    }),

    // app
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InAppService, { passThruUnknownUrl: true })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
