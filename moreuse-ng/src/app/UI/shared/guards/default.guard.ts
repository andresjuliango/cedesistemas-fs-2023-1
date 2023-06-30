import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})

export class DefaultGuard implements CanActivate {
  constructor(public router : Router){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (localStorage.getItem('token') === 'juan2@gmail.comQwerty12') {
      return true;
    }
    else
    {
      this.router.navigate(['/fullscreen/login'])
    return false;
    }

  }
}

