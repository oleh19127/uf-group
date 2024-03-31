import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  themeSignal = signal<string>('light-theme');

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
