import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { FlashMessage } from 'angular-flash-message';
@Injectable()
export class adminAuthService implements CanActivate {

    constructor(private router: Router,private flashmessage:FlashMessage) { }


    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('user') !== null) {
            if (JSON.parse(localStorage.getItem('user')).type == 'admin') {
                return true;
            } else {
                this.flashmessage.danger("you are not an admin");
                this.router.navigate(['login']);
                return false;
            }
        } else {
            this.flashmessage.danger("you have to login first")
            this.router.navigate(['login']);
            return false;
        }

    }
}