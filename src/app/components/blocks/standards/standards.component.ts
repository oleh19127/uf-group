import { Component, inject } from '@angular/core';
import { ProgressiveImageComponent } from '../progressive-image/progressive-image.component';
import { ThemeService } from '../../../services/theme.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-standards',
  imports: [ProgressiveImageComponent, NgClass],
  templateUrl: './standards.component.html',
  styleUrl: './standards.component.scss',
})
export class StandardsComponent {
  themeService: ThemeService = inject(ThemeService);
}
