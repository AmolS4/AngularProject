import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/helper/auth.guard';
import { SchedulingComponent } from './scheduling.component';

const routes: Routes = [{ path: 'schedule', component: SchedulingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulingRoutingModule { }
