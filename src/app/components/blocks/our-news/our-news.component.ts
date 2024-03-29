import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Inject,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SwiperContainer } from 'swiper/swiper-element';
import { SwiperOptions } from 'swiper/types';
import { ProgressiveImageComponent } from '../progressive-image/progressive-image.component';

@Component({
  selector: 'app-our-news',
  standalone: true,
  imports: [ProgressiveImageComponent],
  templateUrl: './our-news.component.html',
  styleUrl: './our-news.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OurNewsComponent implements AfterViewInit {
  constructor(@Inject(DOCUMENT) private document: Document) {}
  ngAfterViewInit() {
    this.initSlider();
  }
  initSlider() {
    const swiperEl = this.document.querySelector(
      '.our-news-swiper-container',
    ) as SwiperContainer;
    const swiperButtonNext = this.document.querySelector(
      '.our-news-swiper-button-next',
    ) as HTMLElement;
    const swiperButtonPrev = this.document.querySelector(
      '.our-news-swiper-button-prev',
    ) as HTMLElement;

    const swiperParams = {
      slidesPerView: 1,
      navigation: {
        nextEl: swiperButtonNext,
        prevEl: swiperButtonPrev,
      },
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
      on: {
        init() {},
      },
    } as SwiperOptions;
    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();
  }
}
