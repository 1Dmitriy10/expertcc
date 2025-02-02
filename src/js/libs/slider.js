// ========================= Подключение слайдера =============================================
//подключение в gulp 
import Swiper from 'swiper/bundle';
import "swiper/swiper-bundle.css";


const industrySlider = new Swiper('.preview-industry__slider', {
    // Стрелки
    navigation: {
        nextEl: '.preview-industry__btn-slider-next',
        prevEl: '.preview-industry__btn-slider-prev',
    },

    /*Отступ у карточек*/
    spaceBetween: 10,
    /*Показывать по n карточек*/
    slidesPerView: 2.2,
    /* При достижении конца, перепрыгнуть в начало */
    // rewind: true,
    /*Увеличение при наведении курсора мыши */
    // zoom: true,
    /*Ленивая подгрузка */
    lazy: true,
    /*Бесконечная прокрутка */
    // loop: true,
    /*Ориентация */
    // direction: 'vertical',
    /*Авто высота*/
    // autoHeight: true,
    /*иконка захвата при наведении на слайд*/
    grabCursor: true,
    /*Автоматическое перелистывание*/
    // autoplay: {
    //     delay: 5000,
    //   },
    /*Брек-поинты*/
    breakpoints: {
        1480: {
            slidesPerView: 5.2,
            spaceBetween: 16,
        },
        1300: {
            slidesPerView: 4.2,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 3.2,
            spaceBetween: 15,
        },
        575: {
            slidesPerView: 2.5,
            spaceBetween: 10,
        }
    },

});

const planSlider = new Swiper('.plan__slider', {
    // Стрелки
    navigation: {
        nextEl: '.plan__btn-slider-next',
        prevEl: '.plan__btn-slider-prev',
    },

    /*Отступ у карточек*/
    spaceBetween: 12,
    /*Показывать по n карточек*/
    slidesPerView: 1,
    /* При достижении конца, перепрыгнуть в начало */
    // rewind: true,
    /*Увеличение при наведении курсора мыши */
    // zoom: true,
    /*Ленивая подгрузка */
    lazy: true,
    /*Бесконечная прокрутка */
    // loop: true,
    /*Ориентация */
    // direction: 'vertical',
    /*Авто высота*/
    // autoHeight: true,
    /*иконка захвата при наведении на слайд*/
    grabCursor: true,
    /*Автоматическое перелистывание*/
    // autoplay: {
    //     delay: 5000,
    //   },
    /*Брек-поинты*/
    breakpoints: {
        1400: {
            slidesPerView: 2.4,
            spaceBetween: 16,
        },
        // 1300: {
        //     slidesPerView: 1.5,
        //     spaceBetween: 15,
        // },
        // 992: {
        //     slidesPerView: 3.2,
        //     spaceBetween: 15,
        // },
        575: {
            slidesPerView: 1.5,
            spaceBetween: 12,
        }
    },

});

const previewProjectSlider = new Swiper('.preview-project__slider', {
    // Стрелки
    navigation: {
        nextEl: '.preview-project-slider-next',
        prevEl: '.preview-project__btn-slider-prev',
    },

    /*Отступ у карточек*/
    spaceBetween: 12,
    /*Показывать по n карточек*/
    slidesPerView: 1,
    /* При достижении конца, перепрыгнуть в начало */
    // rewind: true,
    /*Увеличение при наведении курсора мыши */
    // zoom: true,
    /*Ленивая подгрузка */
    lazy: true,
    /*Бесконечная прокрутка */
    // loop: true,
    /*Ориентация */
    // direction: 'vertical',
    /*Авто высота*/
    // autoHeight: true,
    /*иконка захвата при наведении на слайд*/
    grabCursor: true,
    /*Автоматическое перелистывание*/
    // autoplay: {
    //     delay: 5000,
    //   },
    /*Брек-поинты*/
    breakpoints: {
        1400: {
            slidesPerView: 2.4,
            spaceBetween: 16,
        },
        // 1300: {
        //     slidesPerView: 1.5,
        //     spaceBetween: 15,
        // },
        // 992: {
        //     slidesPerView: 3.2,
        //     spaceBetween: 15,
        // },
        575: {
            slidesPerView: 1.5,
            spaceBetween: 12,
        }
    },

});

const previewReviewsSlider = new Swiper('.preview-reviews__slider', {
    // Стрелки
    navigation: {
        nextEl: '.preview-reviews__btn-slider-next',
        prevEl: '.preview-reviews__btn-slider-prev',
    },

    /*Отступ у карточек*/
    spaceBetween: 12,
    /*Показывать по n карточек*/
    slidesPerView: 1,
    /* При достижении конца, перепрыгнуть в начало */
    // rewind: true,
    /*Увеличение при наведении курсора мыши */
    // zoom: true,
    /*Ленивая подгрузка */
    lazy: true,
    /*Бесконечная прокрутка */
    // loop: true,
    /*Ориентация */
    // direction: 'vertical',
    /*Авто высота*/
    // autoHeight: true,
    /*иконка захвата при наведении на слайд*/
    grabCursor: true,
    /*Автоматическое перелистывание*/
    // autoplay: {
    //     delay: 5000,
    //   },
    /*Брек-поинты*/
    breakpoints: {
        1400: {
            slidesPerView: 3.7,
            spaceBetween: 16,
        },
        // 1300: {
        //     slidesPerView: 1.5,
        //     spaceBetween: 15,
        // },
        992: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        575: {
            slidesPerView: 1.5,
            spaceBetween: 12,
        }
    },

});

const brandsSlider = new Swiper('.brands__slider', {
    // Стрелки
    navigation: {
        nextEl: '.preview-reviews__btn-slider-next',
        prevEl: '.preview-reviews__btn-slider-prev',
    },

    /*Отступ у карточек*/
    spaceBetween: 12,
    /*Показывать по n карточек*/
    slidesPerView: 2,
    /* При достижении конца, перепрыгнуть в начало */
    // rewind: true,
    /*Увеличение при наведении курсора мыши */
    // zoom: true,
    /*Ленивая подгрузка */
    lazy: true,
    /*Бесконечная прокрутка */
    // loop: true,
    /*Ориентация */
    // direction: 'vertical',
    /*Авто высота*/
    // autoHeight: true,
    /*иконка захвата при наведении на слайд*/
    grabCursor: true,
    /*Автоматическое перелистывание*/
    // autoplay: {
    //     delay: 5000,
    //   },
    centeredSlides: true,
   centeredSlidesBounds: true,
    /*Брек-поинты*/
    breakpoints: {
        1400: {
            slidesPerView: 6.7,
            spaceBetween: 16,
        },
        1220: {
            slidesPerView: 4.7,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 3.7,
            spaceBetween: 12,
        },
        575: {
            slidesPerView: 2.7,
            spaceBetween: 12,
        }
    },

});

const previewNewsSlider = new Swiper('.preview-news__slider', {
    // Стрелки
    navigation: {
        nextEl: '.preview-news__btn-slider-next',
        prevEl: '.preview-news__btn-slider-prev',
    },

    /*Отступ у карточек*/
    spaceBetween: 16,
    /*Показывать по n карточек*/
    slidesPerView: 3,
    /* При достижении конца, перепрыгнуть в начало */
    // rewind: true,
    /*Увеличение при наведении курсора мыши */
    // zoom: true,
    /*Ленивая подгрузка */
    lazy: true,
    /*Бесконечная прокрутка */
    // loop: true,
    /*Ориентация */
    // direction: 'vertical',
    /*Авто высота*/
    // autoHeight: true,
    /*иконка захвата при наведении на слайд*/
    grabCursor: true,
    /*Автоматическое перелистывание*/
    // autoplay: {
    //     delay: 5000,
    //   },
    // центрирование
//     centeredSlides: true,
//    centeredSlidesBounds: true,
    /*Брек-поинты*/
    // breakpoints: {
    //     1400: {
    //         slidesPerView: 6.7,
    //         spaceBetween: 16,
    //     },
    //     1220: {
    //         slidesPerView: 4.7,
    //         spaceBetween: 15,
    //     },
    //     992: {
    //         slidesPerView: 3.7,
    //         spaceBetween: 12,
    //     },
    //     575: {
    //         slidesPerView: 2.7,
    //         spaceBetween: 12,
    //     }
    // },

});



