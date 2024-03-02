import { Component, OnInit, Renderer2 } from '@angular/core';
import {
  ChildrenOutletContexts,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { HeaderComponent } from './components/blocks/header/header.component';
import { fade } from './animations/fade';
import { NgClass } from '@angular/common';
import { PreloaderComponent } from './components/blocks/preloader/preloader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    RouterLink,
    PreloaderComponent,
    NgClass,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [fade],
})
export class AppComponent implements OnInit {
  bodyLockClass = 'lock';
  loading = true;
  constructor(
    private contexts: ChildrenOutletContexts,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    const hasClass = document.body.classList.contains(this.bodyLockClass);

    setTimeout(() => {
      if (hasClass) {
        this.renderer.removeClass(document.body, this.bodyLockClass);
      }
      this.loading = false;
    }, 4000);
  }
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
