import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        window.localStorage.setItem(
          'themeSignal',
          JSON.stringify(this.themeSignal()),
        );
      }
    });
  }

  themeSignal = signal<string>(this.parseLocalStorage());

  parseLocalStorage() {
    if (isPlatformBrowser(this.platformId)) {
      return JSON.parse(
        window.localStorage.getItem('themeSignal') ?? '"light-theme"',
      );
    }
  }

  setTheme(theme: string) {
    this.themeSignal.set(theme);
  }

  updateTheme() {
    this.themeSignal.update((value) => {
      if (value === 'dark-theme') {
        return 'light-theme';
      }
      return 'dark-theme';
    });
  }
}
