import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../services/perfil.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss'],
})
export class EditarPerfilComponent  implements OnInit {

  nuevoNombre: string = '';

  constructor(private perfilService: PerfilService) { }

  guardarCambios() {
    this.perfilService.actualizarNombre(this.nuevoNombre);
  }

  ngOnInit() {}

}
