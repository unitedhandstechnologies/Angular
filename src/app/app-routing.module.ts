import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Component2Component } from './parent2/component2/component2.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: Component2Component },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
