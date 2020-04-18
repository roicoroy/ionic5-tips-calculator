import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DateSetupPage } from './date-setup.page';

const routes: Routes = [
  {
    path: '',
    component: DateSetupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DateSetupPageRoutingModule {}
