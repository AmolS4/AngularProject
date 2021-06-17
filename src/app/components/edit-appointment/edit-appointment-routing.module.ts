import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAppointmentComponent } from './edit-appointment.component';

const routes: Routes = [{ path: 'edit-appointment/:id', component: EditAppointmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditAppointmentRoutingModule { }
