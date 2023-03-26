import { DashboardComponent } from './app/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ {path: 'dashboard',loadChildren: () => import('./app/dashboard/dashboard-modules/dashboard.module').then(m => m.DashboardModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
