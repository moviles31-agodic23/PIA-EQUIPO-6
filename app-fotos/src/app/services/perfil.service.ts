import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  private nombreSubject = new BehaviorSubject<string>('')

  nombre$ = this.nombreSubject.asObservable();

  actualizarNombre(nuevoNombre: string) {
    this,this.nombreSubject.next(nuevoNombre);
  }

  constructor() { }
}
