import { Component } from '@angular/core';
import { ProgressiveImageComponent } from '../progressive-image/progressive-image.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [ProgressiveImageComponent, RouterLink],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
})
export class IntroComponent {
  goToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }
}
