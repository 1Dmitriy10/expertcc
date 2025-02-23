import Swiper from 'swiper/bundle';
import "swiper/swiper-bundle.css";



export function storiesSlider() {
      let teasersWrap = document.querySelector(".teasers__container");
      let block = document.querySelector(".teasers-popup");
      let popupExit = document.querySelector('.teasers-popup-exit')

      teasersWrap.addEventListener("click", getTeasers)
      popupExit.addEventListener("click", hiddenTeasers)

      function getTeasers(e) {
        let el = e.target.parentElement.dataset.count;

        showBlock(el)
      }

      function showBlock(el) {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        let ind = 0;
        if (mediaQuery.matches) {
            
            ind = el - 1;
            
        } else {
            ind = el - 1;
        }
        console.log(ind)
         
        block.classList.add("active");

        const teaserSlider = new Swiper('.teasers__slider', {
            // Стрелки
            // navigation: {
            //     nextEl: '.plan__btn-slider-next',
            //     prevEl: '.plan__btn-slider-prev',
            // },
            pagination: {
                clickable: true,
                renderBullet: function (index, className) {
                  return '<span class="' + className + '"></span>';
                },
                el: '.swiper-pagination',
                
              },
        
            /*Отступ у карточек*/
            spaceBetween: 20,
            /*Показывать по n карточек*/
            slidesPerView: 1,
            centeredSlides: true,
            /* При достижении конца, перепрыгнуть в начало */
            // rewind: true,
            /*Увеличение при наведении курсора мыши */
            // zoom: true,
            /*Ленивая подгрузка */
            // lazy: true,
            /*Бесконечная прокрутка */
            // loop: true,
            /*Ориентация */
            // direction: 'vertical',
            /*Авто высота*/
            // autoHeight: true,
            /*иконка захвата при наведении на слайд*/
            grabCursor: true,
            /*Автоматическое перелистывание*/
            autoplay: {
                delay: 2000,
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
          
        teaserSlider.slideTo(ind,300, false)
        teaserSlider.autoplay.start();

        let x = document.querySelector(".swiper-wrapper")
        teaserSlider.on("progress", (ev) => {
            let arr = ev.pagination.bullets
            arr.forEach(el=>{
                if(el.classList.contains("swiper-pagination-bullet-active")){
                    console.log("ok");
                    el.classList.add("viewed")
                }
                
            })
              
            });
       
      }

      function hiddenTeasers() {
        block.classList.remove("active");
        let bullets = document.querySelectorAll("swiper-pagination-bullet");

        bullets.forEach(el=>{
            el.classList.remove("viewed")
        })
        
      }
};
storiesSlider();

