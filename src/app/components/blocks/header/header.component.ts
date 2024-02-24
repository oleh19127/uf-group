import { Component, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  bodyClass = 'lock';
  isActive = false;
  constructor(private renderer: Renderer2) {}
  toggleBodyClass() {
    const hasClass = document.body.classList.contains(this.bodyClass);
    if (hasClass) {
      this.renderer.removeClass(document.body, this.bodyClass);
    } else {
      this.renderer.addClass(document.body, this.bodyClass);
    }
  }

  toggleNav() {
    this.toggleBodyClass();
    this.isActive = !this.isActive;
  }

  removeActiveClass() {
    this.isActive = false;
    this.renderer.removeClass(document.body, this.bodyClass);
  }
}
