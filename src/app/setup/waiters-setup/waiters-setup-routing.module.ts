import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaitersSetupPage } from './waiters-setup.page';

const routes: Routes = [
  {
    path: '',
    component: WaitersSetupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaitersSetupPageRoutingModule {}
