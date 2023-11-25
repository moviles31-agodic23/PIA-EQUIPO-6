import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-publicacion',
  templateUrl: './detalle-publicacion.component.html',
  styleUrls: ['./detalle-publicacion.component.scss'],
})
export class DetallePublicacionComponent  implements OnInit {

  constructor() { }

  items: string[] = new Array<string>();

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {this.items.push(`Usuario ${count + i}`);}
  }

  heartIcon = 'heart-outline';
  heartColor = 'dark';

  bookmarkIcon = 'bookmark-outline';
  bookmarkColor = 'dark';

  toggleLike() {
    this.heartIcon = this.heartIcon === 'heart-outline' ? 'heart' : 'heart-outline';
    this.heartColor = this.heartIcon === 'heart-outline' ? 'medium' : 'danger';
  }

  toggleBookmark() {
    this.bookmarkIcon = this.bookmarkIcon === 'bookmark-outline' ? 'bookmark' : 'bookmark-outline';
    this.bookmarkColor = this.bookmarkIcon === 'bookmark-outline' ? 'medium' : 'warning';
  }

}
