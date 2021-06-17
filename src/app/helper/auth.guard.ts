import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from'@angular/router';

<<<<<<< HEAD
import { CtserviceService } from '../ctservice.service';

=======
//import { CtserviceService } from '../ctservice.service';
import {UserService } from '../services/user.service'
>>>>>>> 8cc5f625be7266bc5cd68d2fd47019ae9641dca3
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
constructor(
private router: Router,
<<<<<<< HEAD
private authenticationService: CtserviceService
=======
//private authenticationService: CtserviceService
private authenticationService : UserService
>>>>>>> 8cc5f625be7266bc5cd68d2fd47019ae9641dca3
) {}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
const currentUser = this.authenticationService.currentUserValue;
if (currentUser) {
// authorised so return true
return true;
}

// not logged in so redirect to login page
this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
return false;
}
}
