import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = 
[{ path: 'components/login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) }, 
{ path: 'components/registration', loadChildren: () => import('./components/registration/registration.module').then(m => m.RegistrationModule) },
{ path: 'components/forgot-password', loadChildren: () => import('./components/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
{ path: 'components/change-password', loadChildren: () => import('./components/change-password/change-password.module').then(m => m.ChangePasswordModule) },
{ path: 'components/patient-medication-details', loadChildren: () => import('./components/patient-medication-details/patient-medication-details.module').then(m => m.PatientMedicationDetailsModule) },
{ path: 'components/provider-registration', loadChildren: () => import('./components/provider-registration/provider-registration.module').then(m => m.ProviderRegistrationModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
