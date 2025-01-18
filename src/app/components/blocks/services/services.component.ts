import { Component, inject } from '@angular/core';
import { ProgressiveImageComponent } from '../progressive-image/progressive-image.component';
import { ThemeService } from '../../../services/theme.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [ProgressiveImageComponent, NgClass],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  themeService: ThemeService = inject(ThemeService);
}
