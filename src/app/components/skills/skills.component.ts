import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperConfigInterface, SwiperDirective } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;

  public swiperDefaultConfig: SwiperConfigInterface = {};
  // coverflow effect
  public swiperAutoplayConfig: SwiperConfigInterface = {
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 3,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // puntos responsive
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 0,
      }
      },
      // FIN puntos responsive
  };

  public swiperThumbsConfig: SwiperConfigInterface = {
    spaceBetween: 30,
    centeredSlides: true,
    slideToClickedSlide: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: {
        el: '.gallery-thumbs',
        slidesPerView: 1,
      },
      multipleActiveThumbs: true
    },
  };

  list:any[] = [
    {
      name: 'HTML, CSS',
      image: 'https://i.imgur.com/fpOwpkL.png'
    },
    {
      name: 'Flex box, Css Grid',
      image: 'https://i.imgur.com/pIAPlao.png'
    },
    {
      name: 'Bootstrap, Tailwind',
      image: 'https://i.imgur.com/FZxwfCj.png'
    },
    {
      name: 'Angular Material',
      image: 'https://i.imgur.com/GOvl79a.jpg'
    },
    {
      name: 'React',
      image: 'https://i.imgur.com/mQJrCcU.png'
    },
    {
      name: 'Angular',
      image: 'https://i.imgur.com/pYSnlX1.jpg'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
