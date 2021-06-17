import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientdetailsComponent } from './patientdetails.component';

const routes: Routes = [{ path: 'patientdetails', component: PatientdetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientdetailsRoutingModule { }
