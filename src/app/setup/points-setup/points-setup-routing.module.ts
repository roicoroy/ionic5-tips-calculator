import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PointsSetupPage } from './points-setup.page';

const routes: Routes = [
  {
    path: '',
    component: PointsSetupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PointsSetupPageRoutingModule {}
