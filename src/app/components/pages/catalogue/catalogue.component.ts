import { Component } from '@angular/core';
import { HeaderComponent } from '../../blocks/header/header.component';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.scss',
  imports: [HeaderComponent],
})
export class CatalogueComponent {}
