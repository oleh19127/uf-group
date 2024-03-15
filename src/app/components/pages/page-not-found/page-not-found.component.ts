import { Component } from '@angular/core';
import { HeaderComponent } from '../../blocks/header/header.component';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
  imports: [HeaderComponent],
})
export class PageNotFoundComponent {}
