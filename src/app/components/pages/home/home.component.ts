import { Component } from '@angular/core';
import { IntroComponent } from '../../blocks/intro/intro.component';
import { AboutComponent } from '../../blocks/about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IntroComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
