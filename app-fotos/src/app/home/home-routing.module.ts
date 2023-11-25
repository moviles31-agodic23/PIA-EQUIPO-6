import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

import { LoginComponent } from '../login/login.component';
import { FeedComponent } from '../feed/feed.component';
import { PublicarFotoComponent } from '../publicar-foto/publicar-foto.component';
import { PerfilDeUsuarioComponent } from '../perfil-de-usuario/perfil-de-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'feed',
        component: FeedComponent,
      },
      {
        path: 'publicar-foto',
        component: PublicarFotoComponent,
      },
      {
        path: 'perfil-de-usuario',
        component: PerfilDeUsuarioComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
