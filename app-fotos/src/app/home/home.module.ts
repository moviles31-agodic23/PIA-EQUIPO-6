import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { LoginComponent } from '../login/login.component';
import { PerfilDeUsuarioComponent } from '../perfil-de-usuario/perfil-de-usuario.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,
  LoginComponent,
  PerfilDeUsuarioComponent
  ]
})
export class HomePageModule {}
