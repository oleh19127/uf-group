import { Component } from '@angular/core';
import {
  ChildrenOutletContexts,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { HeaderComponent } from './components/blocks/header/header.component';
import { fade } from './animations/fade';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, RouterLink, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [fade],
})
export class AppComponent {
  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
