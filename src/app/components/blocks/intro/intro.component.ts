import { Component } from '@angular/core';
import { NgOptimizedImage, NgStyle } from '@angular/common';
import { ProgressiveImageComponent } from '../progressive-image/progressive-image.component';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [NgStyle, ProgressiveImageComponent, NgOptimizedImage],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
})
export class IntroComponent {}
