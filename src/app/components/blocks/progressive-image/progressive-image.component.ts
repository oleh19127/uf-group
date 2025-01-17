import { booleanAttribute, Component, Input } from '@angular/core';
import { NgOptimizedImage, provideImgixLoader } from '@angular/common';

@Component({
  selector: 'app-progressive-image',
  imports: [NgOptimizedImage],
  providers: [provideImgixLoader('https://oberon-356672186.imgix.net')],
  templateUrl: './progressive-image.component.html',
  styleUrl: './progressive-image.component.scss',
})
export class ProgressiveImageComponent {
  @Input({ required: true }) imageUrl!: string;
  @Input({ required: true }) imageAlt!: string;
  @Input() imageWidth!: string;
  @Input() imageHeight!: string;
  @Input({ transform: booleanAttribute, required: true })
  imagePriority!: boolean;
  @Input({ transform: booleanAttribute, required: true })
  imageFill!: boolean;
  imageSrcset = '576w, 768w, 992w, 1200w, 1400w, 1920w, 2048w, 3840w';
}
