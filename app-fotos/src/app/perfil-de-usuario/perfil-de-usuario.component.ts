import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

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

  @Input() nombre: string = 'ruffles xd';

  items: string[] = new Array<string>();

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {this.items.push(`Usuario ${count + i}`);}
  }

  onIonInfinite(ev: any) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

}
