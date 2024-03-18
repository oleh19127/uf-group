import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-standards',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './standards.component.html',
  styleUrl: './standards.component.scss',
})
export class StandardsComponent {}
