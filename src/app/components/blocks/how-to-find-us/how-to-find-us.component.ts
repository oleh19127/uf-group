import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-how-to-find-us',
  imports: [NgClass],
  templateUrl: './how-to-find-us.component.html',
  styleUrls: ['./how-to-find-us.component.scss'],
})
export class HowToFindUsComponent {
  themeService: ThemeService = inject(ThemeService);
}
