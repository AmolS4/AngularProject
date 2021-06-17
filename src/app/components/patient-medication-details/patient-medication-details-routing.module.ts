import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientMedicationDetailsComponent } from './patient-medication-details.component';

const routes: Routes = [{ path: 'patient-medication-details', component: PatientMedicationDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientMedicationDetailsRoutingModule { }
