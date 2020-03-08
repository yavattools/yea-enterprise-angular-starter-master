import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SidenavState } from '../../sidenav/sidenav-state.enum';
import { SidenavService } from '../../sidenav/sidenav.service';

@Component({
  selector: 'yea-toolbar-sidenav-mobile-toggle',
  templateUrl: './toolbar-sidenav-mobile-toggle.component.html',
  styleUrls: ['./toolbar-sidenav-mobile-toggle.component.scss']
})
export class ToolbarSidenavMobileToggleComponent {
  @Input() leftpanel: MatSidenav;

  constructor(private sidenavService: SidenavService) {}

  openSidenavMobile() {
    this.leftpanel.open();
  }
}
