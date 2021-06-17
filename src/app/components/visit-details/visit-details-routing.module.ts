import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitDetailsComponent } from './visit-details.component';

const routes: Routes = [{ path: 'Visit', component: VisitDetailsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitDetailsRoutingModule { }
