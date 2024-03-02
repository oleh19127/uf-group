import { Component } from '@angular/core';
import { NgOptimizedImage, NgStyle } from '@angular/common';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [NgOptimizedImage, NgStyle],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
})
export class IntroComponent {}
