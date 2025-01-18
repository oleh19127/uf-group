import { Component, Inject } from '@angular/core';

import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';

import { fade } from './animations/fade';
import { DOCUMENT } from '@angular/common';
import { HeaderComponent } from './components/blocks/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fade],
})
export class AppComponent {
  constructor(
    private contexts: ChildrenOutletContexts,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
