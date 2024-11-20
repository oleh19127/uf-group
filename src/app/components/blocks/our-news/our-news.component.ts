import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  Inject,
} from '@angular/core';
import { DOCUMENT, NgClass } from '@angular/common';
import { SwiperContainer } from 'swiper/swiper-element';
import { SwiperOptions } from 'swiper/types';
import { ProgressiveImageComponent } from '../progressive-image/progressive-image.component';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-our-news',
  imports: [ProgressiveImageComponent, NgClass],
  templateUrl: './our-news.component.html',
  styleUrl: './our-news.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OurNewsComponent implements AfterViewInit {
  themeService: ThemeService = inject(ThemeService);

  ourNewsSwiperSelector = '.our-news-swiper-container';
  ourNewsSwiper: SwiperContainer | undefined;

  swiperButtonNextSelector = '.our-news-swiper-button-next';
  swiperButtonNext: HTMLElement | undefined;

  swiperButtonPrevSelector = '.our-news-swiper-button-prev';
  swiperButtonPrev: HTMLElement | undefined;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngAfterViewInit() {
    this.initSlider();
  }

  initSlider() {
    try {
      this.ourNewsSwiper = this.document.querySelector(
        this.ourNewsSwiperSelector,
      ) as SwiperContainer;

      this.swiperButtonNext = this.document.querySelector(
        this.swiperButtonNextSelector,
      ) as HTMLElement;

      this.swiperButtonPrev = this.document.querySelector(
        this.swiperButtonPrevSelector,
      ) as HTMLElement;
      if (
        this.ourNewsSwiper &&
        this.swiperButtonNext &&
        this.swiperButtonPrev
      ) {
        const swiperParams = {
          slidesPerView: 1,
          navigation: {
            nextEl: this.swiperButtonNext,
            prevEl: this.swiperButtonPrev,
          },
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: true,
          },
          on: {
            init() {
              console.log('Our News Slider successfully init!!!');
            },
            destroy() {
              console.log('Our News Slider successfully destroyed!!!');
            },
            update() {
              console.log('Our News Slider successfully updated!!!');
            },
          },
        } as SwiperOptions;
        Object.assign(this.ourNewsSwiper, swiperParams);
        this.ourNewsSwiper.initialize();
      }
    } catch (error) {
      console.error(error);
    }
  }
}
