import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./waiters/waiters.module').then(m => m.WaitersPageModule)
  },
  {
    path: 'waiters',
    loadChildren: () => import('./waiters/waiters.module').then(m => m.WaitersPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
