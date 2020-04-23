import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./setup/setup.module').then(m => m.SetupPageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./intro/date/date.module').then( m => m.DatePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'setup',
    loadChildren: () => import('./pages/setup/setup.module').then( m => m.SetupPageModule)
  },
  {
    path: 'date',
    loadChildren: () => import('./intro/date/date.module').then( m => m.DatePageModule)
  },
  {
    path: 'waiters',
    loadChildren: () => import('./intro/waiters/waiters.module').then( m => m.WaitersPageModule)
  },
  {
    path: 'points',
    loadChildren: () => import('./intro/points/points.module').then( m => m.PointsPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
