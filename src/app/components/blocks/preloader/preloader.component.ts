import { Component, inject } from '@angular/core';
import { ProgressiveImageComponent } from '../progressive-image/progressive-image.component';
import { ThemeService } from '../../../services/theme.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-preloader',
  imports: [ProgressiveImageComponent, NgClass],
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.scss',
})
export class PreloaderComponent {
  themeService: ThemeService = inject(ThemeService);
}
