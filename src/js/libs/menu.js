import { Menu } from "../vendor.js"

let menu = new Menu({
    /*Класс меню */
    class: 'nav-list',
    /*Разрешение при котором меню исчезнет*/
    mediaOff: "400px",
    /*Добавление не помещающихся элементов меню в специальный контейнер*/
    opacityItem: true,
    /*Обертка для подменю скрытых элементов
    Разместить в нужном месте <div class="sub-menu-wrap"></div>*/
    solutionForSubmenu: true,
    /*Когда скрыть меню*/
    mediaHidden: "768px",
    /*Стрелка для выпадающего меню (svg/i)*/
    arrowSubmenu: `
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.66659 1.33398L6.99992 6.66732L12.3333 1.33398" stroke="#8C94A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
`
})