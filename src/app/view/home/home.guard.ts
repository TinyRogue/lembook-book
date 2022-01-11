import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@store/app.reducer';
import { Injectable } from '@angular/core';
import { map, retry } from 'rxjs/operators';
import { loginWithJWT } from '../book/login/store/auth.actions';

@Injectable()
export class HomeGuard implements CanActivate {
  constructor(
    private readonly _store: Store<AppState>,
    private readonly _router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this._store
      .select((state) => state.auth.userUID)
      .pipe(
        map((userUID) => {
          if (!userUID) {
            this._store.dispatch(loginWithJWT());
            this._router.navigate(['']);
            return false;
          } else {
            return true;
          }
        }),
        retry(3)
      );
  }
}
