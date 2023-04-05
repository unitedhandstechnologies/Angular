import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SecondCompComponent } from './second-comp/second-comp.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'first-component',
    pathMatch: 'full',
  },
  {
    path: 'first-component',
    component: FirstCompComponent,
  },
  {
    path: 'second-component',
    component: SecondCompComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
