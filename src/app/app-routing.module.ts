import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Feature1Component } from './feature1/feature1.component';
import { Feature2Component } from './feature2/feature2.component'

const routes: Routes = [
  {
    path: '1',
    component: Feature1Component,
  },
  {
    path: '2',
    component: Feature2Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
