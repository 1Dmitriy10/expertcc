export function sliderNews() {
let section = document.querySelector('.preview-news')
let wrap = document.querySelector(".preview-news__swiper-wrapper");
let arr = [...wrap.children]
let cf = 135;

section.addEventListener("click", getMargin)

function getMargin() {
    arr.forEach( el=> {
        let numberCount = el.getAttribute("aria-label").split("/")[0];
        numberCount = numberCount.replace(/\s/g, '');
        
        if(numberCount == "1") {
            
        }else{
            if(el.classList.contains("swiper-slide-active")) {
                console.log("ok")
                el.style.cssText = `margin-left:${numberCount * cf}px`
            }else{
                el.style.cssText = `margin-left:16px`
                
            }
        }
    });
};
// getMargin();

};
sliderNews();