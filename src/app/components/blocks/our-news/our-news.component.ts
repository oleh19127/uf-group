import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-our-news',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './our-news.component.html',
  styleUrl: './our-news.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OurNewsComponent {}
