import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
