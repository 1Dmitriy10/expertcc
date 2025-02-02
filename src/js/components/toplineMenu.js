export function toplineMenu() {
    let menu = document.querySelector('.top-nav');
    let menuItem = menu.querySelectorAll('.nav-item');

    menuItem.forEach(el=>{
            let subMenu = el.querySelector(".top-sub-menu");
            if(subMenu) {
                el.insertAdjacentHTML("beforeend", `
                    <btn class='drop-menu'>
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.66659 1.33398L6.99992 6.66732L12.3333 1.33398" stroke="#8C94A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>    
                    </btn>
                    `)
            }
        })

    // menuItem.forEach(el=>{
    //     let subMenu = el.querySelector(".top-sub-menu");
    //     if(subMenu) {
    //         el.insertAdjacentHTML("beforeend", `
    //             <btn class='drop-menu'>
    //                 <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                 <path d="M1.66659 1.33398L6.99992 6.66732L12.3333 1.33398" stroke="#8C94A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    //                 </svg>    
    //             </btn>
    //             `)
    //     }
    //     el.addEventListener("click", function(e) {
    //         let activLi = document.querySelectorAll(".nav-item.active");
    //         let activUl = document.querySelectorAll(".top-sub-menu.show");
    //         let activBtn = document.querySelectorAll(".drop-menu.active");

    //         let subMenu = el.querySelector(".top-sub-menu");
    //         let btn = el.querySelector(".drop-menu");

    //         if(activLi){
    //             activLi.forEach(el=>{
    //                 if(el == e.target.parentElement){

    //                 }else{
    //                     el.classList.remove("active");
    //                 }
                    
    //             })
    //         }
            
    //         if(activUl) {
    //             activUl.forEach(el=>{
    //                 let ul = e.target.parentElement.querySelector(".top-sub-menu")
    //                 if(el == ul){

    //                 }else{
    //                     el.classList.remove("show");
    //                 }
                    
    //             })
    //         }
                        
    //         if(activBtn) {
    //             activBtn.forEach(el=>{
    //                 let btn = e.target.parentElement.querySelector(".drop-menu")
    //                 if(el == btn){

    //                 }else{
    //                     el.classList.remove("active");
    //                 }
                    
    //             })
    //         }
            

    //         el.classList.toggle("active");
    //         subMenu.classList.toggle("show");
    //         btn.classList.toggle("active");
    //     })
    // })

    // document.addEventListener("click", function(e) {
    //     let menu = document.querySelector(".top-sub-menu");
    //     if(e.target != menu && e.target.className != "nav-link") {
    //         let activLi = document.querySelectorAll(".nav-item.active");
    //         let activUl = document.querySelectorAll(".top-sub-menu.show");
    //         let activBtn = document.querySelectorAll(".drop-menu.active");

    //         activLi.forEach(el=>{
    //             el.classList.remove("active");
                
    //         })
            
    //         activUl.forEach(el=>{
    //             el.classList.remove("show");
    //         })
                        
    //         activBtn.forEach(el=>{
    //             el.classList.remove("active");
                
    //         })
    //     }
    // })
};
toplineMenu();