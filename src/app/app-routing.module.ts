import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helper/auth.guard';

const routes: Routes = [{ path: 'components/login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) }, 
{ path: 'components/registration', loadChildren: () => import('./components/registration/registration.module').then(m => m.RegistrationModule) }, 
{ path: 'components/Scheduling', loadChildren: () => import('./components/scheduling/scheduling.module').then(m => m.SchedulingModule), canActivate: [AuthGuard] }, 
{ path: 'components/AddAppointment', loadChildren: () => import('./components/add-appointment/add-appointment.module').then(m => m.AddAppointmentModule) }, 
{ path: 'components/EditAppointment', loadChildren: () => import('./components/edit-appointment/edit-appointment.module').then(m => m.EditAppointmentModule) }, 
{ path: 'components/paitent-User-Schedule', loadChildren: () => import('./components/paitent-user-schedule/paitent-user-schedule.module').then(m => m.PaitentUserScheduleModule) },
 { path: 'components/deleteAppointment', loadChildren: () => import('./components/delete-appointment/delete-appointment.module').then(m => m.DeleteAppointmentModule) }, 
 { path: 'components/physicianView', loadChildren: () => import('./components/physician-view/physician-view.module').then(m => m.PhysicianViewModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
