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
    if (localStorage.getItem('token') === 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOiI2NGFlMDQzMTMzYTU1OTFiNTRmMDA3MjQiLCJpYXQiOjE2ODkxMjU5NjZ9.wveX0Y5PNtGSb9M3pc_FDBZHIxzjYf1xdFGsFWMjvps') {
      return true;
    }
    else
    {
      this.router.navigate(['/fullscreen/login'])
    return false;
    }

  }
}

