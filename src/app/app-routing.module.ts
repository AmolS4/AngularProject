import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { VisitDetailsComponent } from './components/visit-details/visit-details.component';
import { DiagnosisComponent } from './components/diagnosis/diagnosis.component';
import { ProcedureComponent } from './components/procedure/procedure.component';

// const routes: Routes = [{ path: 'components/login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
//  { path: 'components/registration', loadChildren: () => import('./components/registration/registration.module').then(m => m.RegistrationModule) },
//   { path: 'components/VisitDetails', loadChildren: () => import('./components/visit-details/visit-details.module').then(m => m.VisitDetailsModule) }];

const routes: Routes = [{path :'', component:VisitDetailsComponent},
 { path: 'Diagnosis', loadChildren: () => import('./components/diagnosis/diagnosis.module').then(m => m.DiagnosisModule) },
 { path: 'Procedure', loadChildren: () => import('./components/procedure/procedure.module').then(m => m.ProcedureModule) }
 ]
=======
import { PatientdetailsComponent } from './components/patientdetails/patientdetails.component';
import { AuthGuard } from './helper/auth.guard';
import { DashboardComponent } from './Layout/dashboard/dashboard.component';
import { LayoutComponent } from './Layout/layout/layout.component';
//import { TopnavComponent } from './Layout/topnav/topnav.component';


const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('src/app/Layout/layout/layout.module').then(m => m.LayoutModule),
  // }
  {
    path : 'layout' , component : LayoutComponent
  }
  // {
  //   path : 'dashboard' , component : DashboardComponent
  // },
  // {
  //   path : 'patientdetails' , component : PatientdetailsComponent
  // }


];
>>>>>>> 8cc5f625be7266bc5cd68d2fd47019ae9641dca3

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
