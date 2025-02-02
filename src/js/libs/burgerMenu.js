import { BurgerMenu } from "../vendor.js";

let mobMenu = new BurgerMenu({
    /*---Класс кнопки для открывания меню---*/
    openBtn: "mob-nav-btn", 
    /*---Класс кнопки для закрытия меню (если кнопка для откр/закр одна - то оставить пустой)---*/
    closeBtn: "mob-nav-exit",
    /*---Иконка стрелки спойлера (svg или <i>)---*/   
    arrowIcon: `
    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.66659 1.33398L6.99992 6.66732L12.3333 1.33398" stroke="#8C94A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
    `,  
    /*---Скорость анимации появления меню (0.3)---*/
    menuAnimationTime: "",  
    /*---Скорость анимации спойлеров (0.3)---*/
    spoilersAnimationTime: "",  
    /*---Режим аккордиона---*/
    spoilersAccordion: false,
    /*---Сторона открывания меню horizontal/vertical---*/   
    openingSide: "horizontal",
    /*---Разрешение при котором появиться меню---*/ 
    mediaShow: "768px"    

})