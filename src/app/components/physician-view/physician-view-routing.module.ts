import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhysicianViewComponent } from './physician-view.component';

const routes: Routes = [{ path: 'view', component: PhysicianViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhysicianViewRoutingModule { }
