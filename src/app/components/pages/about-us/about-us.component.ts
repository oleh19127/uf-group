import { Component } from '@angular/core';
import { HeaderComponent } from '../../blocks/header/header.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
  imports: [HeaderComponent],
})
export class AboutUsComponent {}
