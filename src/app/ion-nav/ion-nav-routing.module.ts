import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonNavPage } from './ion-nav.page';

const routes: Routes = [
  {
    path: 'ion-nav',
    component: IonNavPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../ion-nav/tab1/tab1.module').then(m => m.Tab1PageModule),
      },
      {
        path: 'tab2',
        loadChildren: () => import('../ion-nav/tab2/tab2.module').then(m => m.Tab2PageModule),
      },
      {
        path: 'tab3',
        loadChildren: () => import('../ion-nav/tab3/tab3.module').then(m => m.Tab3PageModule),
      },
      {
        path: 'tab4',
        loadChildren: () => import('../ion-nav/tab4/tab4.module').then(m => m.Tab4PageModule),
      },
      {
        path: 'tab5',
        loadChildren: () => import('../ion-nav/tab5/tab5.module').then(m => m.Tab5PageModule),
      },
      {
        path: '',
        redirectTo: '/ion-nav/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/ion-nav/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonNavPageRoutingModule { }