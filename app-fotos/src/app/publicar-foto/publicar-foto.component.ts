import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Directory, Filesystem } from '@capacitor/filesystem';

@Component({
  selector: 'app-publicar-foto',
  templateUrl: './publicar-foto.component.html',
  styleUrls: ['./publicar-foto.component.scss'],
})
export class PublicarFotoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    Camera.requestPermissions();
  }

  async tomarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
    });
  }
}