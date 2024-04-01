import { Component, inject } from '@angular/core';
import { ProgressiveImageComponent } from '../progressive-image/progressive-image.component';
import { ThemeService } from '../../../services/theme.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ProgressiveImageComponent, NgClass],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  themeService: ThemeService = inject(ThemeService);
}
