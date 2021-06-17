import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAppointmentComponent } from './add-appointment.component';

const routes: Routes = [{ path: 'addappointment', component: AddAppointmentComponent },
                        { path: 'edit/:id', component: AddAppointmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddAppointmentRoutingModule { }
