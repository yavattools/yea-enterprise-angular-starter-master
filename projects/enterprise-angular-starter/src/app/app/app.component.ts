import { Component, OnInit } from '@angular/core';
import { AppContextStoreFacade } from '@app/core/store';
import { WindowRefService, ScreenService } from '@app/core/providers';
import { routeAnimations } from '@app/core/core.module';

@Component({
  selector: 'yea-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class AppComponent implements OnInit {
  public window: any;

  constructor(
    public appContextFacade: AppContextStoreFacade,
    public winrefService: WindowRefService,
    public screenService: ScreenService
  ) {
    this.window = this.winrefService.nativeWindow;
  }

  ngOnInit(): void {
    this.appContextFacade.init();
    this.screenService.screenWindowHeight = this.window.innerHeight;
  }

  onResize(event) {
    this.screenService.screenWindowHeight = this.window.innerHeight;
  }
}
