import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteAppointmentComponent } from './delete-appointment.component';

const routes: Routes = [{ path: 'delete-appointment', component: DeleteAppointmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeleteAppointmentRoutingModule { }
