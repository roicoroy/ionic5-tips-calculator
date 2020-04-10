import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './setup.page';

const routes: Routes = [
  {
    path: 'setup',
    component: TabsPage,
    children: [
      {
        path: 'waiters-setup',
        children: [
          {
            path: '',
            loadChildren: () => import('./waiters-setup/waiters-setup.module').then(m => m.WaitersSetupPageModule)
          }
        ]
      },
      {
        path: 'date-setup',
        children: [
          {
            path: '',
            loadChildren: () => import('./date-setup/date-setup.module').then(m => m.DateSetupPageModule)
          }
        ]
      },
      {
        path: 'points-setup',
        children: [
          {
            path: '',
            loadChildren: () => import('./points-setup/points-setup.module').then(m => m.PointsSetupPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/setup/waiters-setup',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/setup/waiters-setup',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
