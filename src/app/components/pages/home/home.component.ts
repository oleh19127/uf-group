import { Component } from '@angular/core';
import { IntroComponent } from '../../blocks/intro/intro.component';
import { AboutComponent } from '../../blocks/about/about.component';
import { ServicesComponent } from '../../blocks/services/services.component';
import { OurNewsComponent } from '../../blocks/our-news/our-news.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    IntroComponent,
    AboutComponent,
    ServicesComponent,
    OurNewsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
