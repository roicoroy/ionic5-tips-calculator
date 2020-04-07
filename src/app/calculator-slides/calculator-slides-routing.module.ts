import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculatorSlidesPage } from './calculator-slides.page';

const routes: Routes = [
  {
    path: '',
    component: CalculatorSlidesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculatorSlidesPageRoutingModule {}
