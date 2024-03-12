import { booleanAttribute, Component, Input } from '@angular/core';
import { NgClass, NgIf, NgOptimizedImage, NgStyle } from '@angular/common';

@Component({
  selector: 'app-progressive-image',
  standalone: true,
  imports: [NgStyle, NgClass, NgOptimizedImage, NgIf],
  templateUrl: './progressive-image.component.html',
  styleUrl: './progressive-image.component.scss',
})
export class ProgressiveImageComponent {
  @Input({ required: true }) imageUrl!: string;
  @Input({ required: true }) imageUrlPlaceholder!: string;
  @Input({ required: true }) imageAlt!: string;
  @Input({}) imageWidth!: string;
  @Input({}) imageHeight!: string;
  @Input({ transform: booleanAttribute, required: true })
  imagePriority!: boolean;
  @Input({ transform: booleanAttribute, required: true }) imageFill!: boolean;

  isLoaded = false;
  onImageLoad() {
    this.isLoaded = true;
  }
}
