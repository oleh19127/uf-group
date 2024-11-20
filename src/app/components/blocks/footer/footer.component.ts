import { Component, inject } from '@angular/core';
import { ProgressiveImageComponent } from '../progressive-image/progressive-image.component';
import { RouterLink } from '@angular/router';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-footer',
  imports: [ProgressiveImageComponent, RouterLink, NgOptimizedImage, NgClass],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  themeService: ThemeService = inject(ThemeService);
}
