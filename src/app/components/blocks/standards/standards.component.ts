import { Component } from '@angular/core';
import { ProgressiveImageComponent } from '../progressive-image/progressive-image.component';

@Component({
  selector: 'app-standards',
  standalone: true,
  imports: [ProgressiveImageComponent],
  templateUrl: './standards.component.html',
  styleUrl: './standards.component.scss',
})
export class StandardsComponent {}
