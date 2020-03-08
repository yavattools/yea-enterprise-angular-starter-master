import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { AuthStoreFacade } from '../store/auth-store-facade';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  isAuthenticated$: Observable<any>;

  constructor(private authFacade: AuthStoreFacade, private router: Router) {
    this.isAuthenticated$ = authFacade.authenticated$;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('Route gaurd reached.. redirect');
    return this.isAuthenticated$.pipe(
      map(authed => {
        if (!authed) {
          this.authFacade.gotoLogin();
          return false;
        }
        return true;
      }),
      take(1)
    );
  }
}
