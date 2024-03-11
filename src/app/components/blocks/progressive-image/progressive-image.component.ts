import { Component, Input } from '@angular/core';
import { NgClass, NgOptimizedImage, NgStyle } from '@angular/common';

@Component({
  selector: 'app-progressive-image',
  standalone: true,
  imports: [NgStyle, NgClass, NgOptimizedImage],
  templateUrl: './progressive-image.component.html',
  styleUrl: './progressive-image.component.scss',
})
export class ProgressiveImageComponent {
  @Input({ required: true }) imageUrl!: string;
  @Input({ required: true }) imageUrlPlaceholder!: string;
  @Input({ required: true }) imageAlt!: string;
  @Input({ required: true }) imageWidth!: string;
  @Input({ required: true }) imageHeight!: string;

  isLoaded = false;
  onImageLoad() {
    this.isLoaded = true;
  }
}
