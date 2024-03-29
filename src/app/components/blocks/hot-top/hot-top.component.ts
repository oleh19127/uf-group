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
  selector: 'app-hot-top',
  standalone: true,
  imports: [ProgressiveImageComponent],
  templateUrl: './hot-top.component.html',
  styleUrl: './hot-top.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HotTopComponent implements AfterViewInit {
  slides = [1, 2, 3, 4, 5];
  constructor(@Inject(DOCUMENT) private document: Document) {}
  ngAfterViewInit() {
    this.initSlider();
  }
  initSlider() {
    const swiperEl = this.document.querySelector(
      '.hot-top-swiper-container',
    ) as SwiperContainer;
    const swiperButtonNext = this.document.querySelector(
      '.hot-top-swiper-button-next',
    ) as HTMLElement;
    const swiperButtonPrev = this.document.querySelector(
      '.hot-top-swiper-button-prev',
    ) as HTMLElement;
    const swiperPagination = this.document.querySelector(
      '.hot-top-swiper-pagination',
    ) as HTMLElement;

    const swiperParams = {
      slidesPerView: 1,
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1140: {
          slidesPerView: 3,
        },
        1320: {
          slidesPerView: 4,
        },
      },
      navigation: {
        nextEl: swiperButtonNext,
        prevEl: swiperButtonPrev,
      },
      pagination: {
        el: swiperPagination,
        type: 'bullets',
        clickable: true,
      },
      loop: true,
      autoplay: {
        delay: 2800,
        disableOnInteraction: true,
      },
      spaceBetween: 20,
      on: {
        init() {
          console.log('Hot Top Slider successfully init!!!');
        },
        destroy() {
          // logger.info('Hot Top Slider successfully destroyed!!!');
        },
        update() {
          // logger.info('Hot Top Slider successfully updated!!!');
        },
      },
    } as SwiperOptions;
    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();
  }
}
