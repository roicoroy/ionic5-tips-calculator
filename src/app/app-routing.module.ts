import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./calculator/calculator.module').then( m => m.CalculatorPageModule)
  },
  {
    path: 'waiters',
    loadChildren: () => import('./waiters/waiters.module').then(m => m.WaitersPageModule)
  },
  {
    path: 'summary',
    loadChildren: () => import('./summary/summary.module').then(m => m.SummaryPageModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then(m => m.FormPageModule)
  },
  {
    path: 'calculator',
    loadChildren: () => import('./calculator/calculator.module').then( m => m.CalculatorPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
