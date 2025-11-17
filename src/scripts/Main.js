import Icons from './utils/Icons.js';
import Swiper from 'swiper/bundle';

class Main {
  constructor() {
    this.init();
    this.initSwiperPagination();
  }

  init() {
    Icons.load();
  }

  initSwiperPagination() {
    const target = document.querySelector('.js-swiper');
    if (target) {
      const swiper = new Swiper(target, {
        speed: 400,

        pagination: {
          el: '.swiper-pagination',
        },
      });
    }
  }
}
new Main();
