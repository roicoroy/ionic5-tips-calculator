import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IonNavPage } from './ion-nav/ion-nav.page';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },

  // {
  //   path: '',
  //   loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./ion-nav/ion-nav.module').then(m => m.IonNavPageModule),
    // outlet: 'warning'
  },
  {
    path: 'nav', component: IonNavPage,
  },

  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'ion-nav',
  //   loadChildren: () => import('./ion-nav/ion-nav.module').then( m => m.IonNavPageModule)
  // },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
