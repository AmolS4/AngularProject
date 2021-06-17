import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

<<<<<<< HEAD
const routes: Routes = [{ path: 'login', component: LoginComponent }];
=======
const routes: Routes = [{ path: '', component: LoginComponent }];
>>>>>>> 8cc5f625be7266bc5cd68d2fd47019ae9641dca3

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
