import { Component, inject } from '@angular/core';
import { ProgressiveImageComponent } from '../progressive-image/progressive-image.component';
import { ThemeService } from '../../../services/theme.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ProgressiveImageComponent, NgClass],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  themeService: ThemeService = inject(ThemeService);
}
