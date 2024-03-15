import { Component } from '@angular/core';
import { HeaderComponent } from '../../blocks/header/header.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  imports: [HeaderComponent],
})
export class GalleryComponent {}
