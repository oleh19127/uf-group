import { Component, HostListener, Inject, Renderer2 } from '@angular/core';

import {
  ChildrenOutletContexts,
  RouterLink,
  RouterOutlet,
} from '@angular/router';

import { fade } from './animations/fade';
import { PreloaderComponent } from './components/blocks/preloader/preloader.component';
import { DOCUMENT } from '@angular/common';
import { HeaderComponent } from './components/blocks/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, PreloaderComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [fade],
})
export class AppComponent {
  bodyLockClass = 'lock';

  constructor(
    private contexts: ChildrenOutletContexts,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  @HostListener('window:load')
  onPageLoad() {
    const hasClass = this.document.body.classList.contains(this.bodyLockClass);
    if (hasClass) {
      this.renderer.removeClass(this.document.body, this.bodyLockClass);
    }
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
