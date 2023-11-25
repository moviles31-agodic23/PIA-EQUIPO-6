import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  
  constructor(public authService: AuthService) {}

  get isLoggedIn(): boolean {
    return this.authService.isAuthenticated;
  }

  items: string[] = new Array<string>();

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      const randomN = Math.floor(Math.random() * 59) + 1;
      this.items.push(`Usuario ${count + i}`);
    }
  }

  onIonInfinite(ev: any) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
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