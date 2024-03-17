import { Component } from '@angular/core';
import { ProgressiveImageComponent } from '../progressive-image/progressive-image.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ProgressiveImageComponent, NgOptimizedImage],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {}
