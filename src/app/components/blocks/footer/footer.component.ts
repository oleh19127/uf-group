import { Component, inject } from '@angular/core';
import { ProgressiveImageComponent } from '../progressive-image/progressive-image.component';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-footer',
  imports: [ProgressiveImageComponent, RouterLink, NgClass],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  themeService: ThemeService = inject(ThemeService);
}
