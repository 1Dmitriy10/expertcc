import Swiper from 'swiper/bundle';
import "swiper/swiper-bundle.css";



function storiesSlider() {
  let teasersWrap = document.querySelector(".teasers__container");
  let block = document.querySelector(".teasers-popup");
  let popupExit = document.querySelector('.teasers-popup-exit')
  let timeAnimSlide = 2000;
  let teaserSlider = {};

  teasersWrap.addEventListener("click", getTeasers)
  popupExit.addEventListener("click", hiddenTeasers)

  function getTeasers(e) {
      let el = e.target.parentElement.dataset.count;

      showBlock(el)
  }


  // показать слайдер
  function showBlock(el) {
      const mediaQuery = window.matchMedia('(max-width: 768px)');
      let ind = 0;

      if (mediaQuery.matches) {
          ind = el - 1;
      } else {
          ind = el - 1;
      }

      block.classList.add("active");

      teaserSlider = new Swiper('.teasers__slider', {
          pagination: {
              clickable: true,
              renderBullet: function (index, className) {
                  return '<progress class="swiper-progress ' + className + '"  min="0" max="100"></progress>';

              },
              el: '.swiper-pagination',

          },
          /*Отступ у карточек*/
          spaceBetween: 20,
          /*Показывать по n карточек*/
          slidesPerView: 1,
          // центрировать
          centeredSlides: true,
          /*иконка захвата при наведении на слайд*/
          grabCursor: true,
          /*Автоматическое перелистывание*/
          autoplay: {
              delay: timeAnimSlide,
              disableOnInteraction: false,
          },
          // 

          /*Брек-поинты*/
          breakpoints: {
              1600: {
                  slidesPerView: 4.5,
                  spaceBetween: 40,
              },
              1200: {
                  slidesPerView: 3.5,
                  spaceBetween: 30,
              },
              930: {
                  slidesPerView: 2.5,
                  spaceBetween: 30,
              },
              768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
              }
          },
      });

      teaserSlider.slideTo(ind, 300, false)
      teaserSlider.autoplay.start();

      let activeBullet = document.querySelector('.swiper-pagination-bullet-active')

      // остановка прогреса при нажатии
      teaserSlider.on("touchMove", (ev) => {
          if (anim) {
              clearInterval(anim);
          }
      })
      // Запуск прогреса при нажатие отпущено
      teaserSlider.on("touchEnd", (ev) => {
          if (anim) {
              anim = setInterval(function () {
                  activeBullet.value = `${activeBullet.value + 1}`;
              }, (timeAnimSlide / 100))
          }
      })
      // Заполнение первого прогресбара
      let anim = setInterval(function () {
          activeBullet.value = `${activeBullet.value + 1}`;
      }, (timeAnimSlide / 100))

      if (activeBullet.value == 100) {
          clearInterval(anim);
      }

      teaserSlider.on("slideChange", (ev) => {
          let arr = ev.pagination.bullets
          arr.forEach(el => {
              if (el.classList.contains("swiper-pagination-bullet-active")) {
                  if (el.classList.contains("viewed")) {
                  } else {
                      // Заполнение прогресбара перед перелистыванием
                      let anim = setInterval(function () {
                          el.value = `${el.value + 1}`;
                      }, timeAnimSlide / 100)

                      if (el.value == 100) {
                          clearInterval(anim);
                      }
                      // остановка прогреса при нажатии
                      teaserSlider.on("touchMove", (ev) => {
                          if (anim) {
                              clearInterval(anim);
                          }
                      })
                      // Запуск прогреса при нажатие отпущено
                      teaserSlider.on("touchEnd", (ev) => {
                          if (anim) {
                              anim = setInterval(function () {
                                  el.value = `${el.value + 1}`;
                              }, timeAnimSlide / 100)
                          }
                      })

                  }
              }

          })
      })

      teaserSlider.on("slideChangeTransitionEnd", (ev) => {
          let arr = ev.pagination.bullets
          arr.forEach(el => {
              clearInterval(anim);
              if (el.classList.contains("viewed")) {
                  el.value = 100;
              }
          })


      })
      // добавление класса пройденному буллету
      teaserSlider.on("progress", (ev) => {
          let arr = ev.pagination.bullets
          arr.forEach(el => {
              if (el.classList.contains("swiper-pagination-bullet-active")) {
                  el.classList.add("viewed")
              }

          })

      });
  }

  // скрытие слайдера
  function hiddenTeasers() {
      block.classList.remove("active");
      let bullets = document.querySelectorAll("swiper-pagination-bullet");

      bullets.forEach(el => {
          el.classList.remove("viewed")
      })

      teaserSlider.destroy()

  }
};
storiesSlider();

