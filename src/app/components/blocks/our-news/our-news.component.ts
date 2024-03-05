import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-our-news',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './our-news.component.html',
  styleUrl: './our-news.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OurNewsComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    // swiper element
    const swiperEl = document.querySelector('swiper-container');

    // swiper parameters
    const swiperParams = {
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: true,
      // },
      on: {
        init() {
          // ...
        },
      },
    };

    // now we need to assign all parameters to Swiper element
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    Object.assign(swiperEl, swiperParams);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    swiperEl.initialize();
  }
}
