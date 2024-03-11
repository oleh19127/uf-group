import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Inject,
  OnInit,
} from '@angular/core';
import { DOCUMENT, NgOptimizedImage } from '@angular/common';
import { SwiperContainer } from 'swiper/swiper-element';
import { SwiperOptions } from 'swiper/types';
import { ProgressiveImageComponent } from '../progressive-image/progressive-image.component';

@Component({
  selector: 'app-our-news',
  standalone: true,
  imports: [NgOptimizedImage, ProgressiveImageComponent],
  templateUrl: './our-news.component.html',
  styleUrl: './our-news.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OurNewsComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) {}
  ngOnInit() {
    this.initSlider();
  }
  initSlider() {
    const swiperEl = this.document.querySelector(
      'swiper-container',
    ) as SwiperContainer;
    const swiperParams = {
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
      on: {
        init() {
          // ...
        },
      },
    } as SwiperOptions;
    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();
  }
}
