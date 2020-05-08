import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./waiter-obj/add-waiter/add-waiter.module').then( m => m.AddWaiterPageModule)
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
    path: 'add-waiter',
    loadChildren: () => import('./waiter-obj/add-waiter/add-waiter.module').then( m => m.AddWaiterPageModule)
  },
  {
    path: 'add-hours',
    loadChildren: () => import('./waiter-obj/add-hours/add-hours.module').then( m => m.AddHoursPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
