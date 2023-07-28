import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'chats',
        loadChildren: () => import('./chats/chats.module').then(m => m.ChatsPageModule)
      },
      {
        path: 'status',
        loadChildren: () => import('./status/status.module').then(m => m.StatusPageModule)
      },
      {
        path: 'calls',
        loadChildren: () => import('./calls/calls.module').then(m => m.CallsPageModule)
      },
      {
        path: '',
        redirectTo: 'chats',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: 'chats',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
