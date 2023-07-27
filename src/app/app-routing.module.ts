import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then( m => m.ContactsPageModule)
  },
  {
    path: 'contact-chat/:id',
    loadChildren: () => import('./contact-chat/contact-chat.module').then( m => m.ContactChatPageModule)
  },
  {
    path: 'calls',
    loadChildren: () => import('./main/calls/calls.module').then( m => m.CallsPageModule)
  },
  {
    path: 'chats',
    loadChildren: () => import('./main/chats/chats.module').then( m => m.ChatsPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'status',
    loadChildren: () => import('./main/status/status.module').then( m => m.StatusPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
