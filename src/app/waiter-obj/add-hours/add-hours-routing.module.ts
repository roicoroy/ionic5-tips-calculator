import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddHoursPage } from './add-hours.page';

const routes: Routes = [
  {
    path: '',
    component: AddHoursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddHoursPageRoutingModule {}
