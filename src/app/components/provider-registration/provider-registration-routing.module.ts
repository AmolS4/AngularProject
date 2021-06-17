import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderRegistrationComponent } from './provider-registration.component';

const routes: Routes = [{ path: 'provider-registration', component: ProviderRegistrationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRegistrationRoutingModule { }
