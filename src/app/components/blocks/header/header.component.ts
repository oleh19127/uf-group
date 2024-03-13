import { Component, HostListener, Inject, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DOCUMENT, NgOptimizedImage } from '@angular/common';

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
  minHeader = 'min-header';
  constructor(
    private render: Renderer2,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  header = this.document.querySelector('.header');

  @HostListener('window:scroll')
  OnWindowScroll() {
    if (this.header) {
      if (
        this.document.body.scrollTop >= 30 ||
        this.document.documentElement.scrollTop >= 30
      ) {
        this.render.addClass(this.header, this.minHeader);
      } else {
        this.render.removeClass(this.header, this.minHeader);
      }
    }
  }
  toggleBodyClass() {
    const hasClass = this.document.body.classList.contains(this.bodyClass);
    if (hasClass) {
      this.render.removeClass(this.document.body, this.bodyClass);
    } else {
      this.render.addClass(this.document.body, this.bodyClass);
    }
  }

  toggleNav() {
    this.toggleBodyClass();
    this.isActive = !this.isActive;
  }

  removeActiveClass() {
    this.goToTop();
    this.isActive = false;
    this.render.removeClass(this.document.body, this.bodyClass);
  }

  goToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }
}
