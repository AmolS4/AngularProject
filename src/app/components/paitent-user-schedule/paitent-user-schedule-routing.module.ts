import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaitentUserScheduleComponent } from './paitent-user-schedule.component';

const routes: Routes = [{ path: '', component: PaitentUserScheduleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaitentUserScheduleRoutingModule { }
