import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-perfil-de-usuario',
  templateUrl: './perfil-de-usuario.component.html',
  styleUrls: ['./perfil-de-usuario.component.scss'],
})
export class PerfilDeUsuarioComponent  implements OnInit {

  constructor(public authService: AuthService) {}

  get isLoggedIn(): boolean {
    return this.authService.isAuthenticated;
  }

  ngOnInit() {}

}
