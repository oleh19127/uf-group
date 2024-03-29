import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressiveImageComponent } from '../progressive-image/progressive-image.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, ProgressiveImageComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  goToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }
}
