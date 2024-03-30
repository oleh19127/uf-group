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

  hotTopSwiperSelector = '.hot-top-swiper-container';
  hotTopSwiper: SwiperContainer | undefined;

  hotTopSwiperButtonNextSelector = '.hot-top-swiper-button-next';
  hotTopSwiperButtonNext: HTMLElement | undefined;

  hotTopSwiperButtonPrevSelector = '.hot-top-swiper-button-prev';
  hotTopSwiperButtonPrev: HTMLElement | undefined;

  hotTopSwiperPaginationSelector = '.hot-top-swiper-pagination';
  hotTopSwiperPagination: HTMLElement | undefined;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngAfterViewInit() {
    this.initSlider();
  }

  initSlider() {
    try {
      this.hotTopSwiper = this.document.querySelector(
        this.hotTopSwiperSelector,
      ) as SwiperContainer;

      this.hotTopSwiperButtonNext = this.document.querySelector(
        this.hotTopSwiperButtonNextSelector,
      ) as HTMLElement;
      this.hotTopSwiperButtonPrev = this.document.querySelector(
        this.hotTopSwiperButtonPrevSelector,
      ) as HTMLElement;
      this.hotTopSwiperPagination = this.document.querySelector(
        this.hotTopSwiperPaginationSelector,
      ) as HTMLElement;
      if (
        this.hotTopSwiper &&
        this.hotTopSwiperButtonNext &&
        this.hotTopSwiperButtonPrev &&
        this.hotTopSwiperPagination
      ) {
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
            nextEl: this.hotTopSwiperButtonNext,
            prevEl: this.hotTopSwiperButtonPrev,
          },
          pagination: {
            el: this.hotTopSwiperPagination,
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
              console.log('Hot Top Slider successfully destroyed!!!');
            },
            update() {
              console.log('Hot Top Slider successfully updated!!!');
            },
          },
        } as SwiperOptions;
        Object.assign(this.hotTopSwiper, swiperParams);
        this.hotTopSwiper.initialize();
      }
    } catch (error) {
      console.error(error);
    }
  }
}
