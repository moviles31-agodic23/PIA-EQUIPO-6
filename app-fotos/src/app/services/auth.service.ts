import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  login() {
    // Lógica de inicio de sesión
    console.log('Inicio de sesión exitoso');
    this.isLoggedIn = true;
  }

  logout() {
    // Lógica de cierre de sesión
    console.log('Cierre de sesión exitoso');
    this.isLoggedIn = false;
  }

  get isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  constructor() { }
}
