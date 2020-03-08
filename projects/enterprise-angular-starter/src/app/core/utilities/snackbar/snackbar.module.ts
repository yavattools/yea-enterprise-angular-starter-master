import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf, ErrorHandler  } from '@angular/core';

import { YeaSnackBarService } from './service';
import { MultiLineSnackbarComponent } from './component/multi-line-snackbar-component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    imports: [
      // angular
      CommonModule,
      SharedModule
    ],
    declarations: [MultiLineSnackbarComponent],
    providers: [ YeaSnackBarService ],
    exports: []

})
export class yeaSnackBarModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: yeaSnackBarModule
  ) {
    if (parentModule) {
      throw new Error('yeaSnackBarModule is already loaded. Import only in AppModule');
    }
  }

}