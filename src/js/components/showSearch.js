export function showSearch() {
let btn = document.querySelectorAll(".btn-search");
let btnExit = document.querySelector(".search__exit");

btn.forEach(el=>{
    el.addEventListener("click", function() {
        let search = document.querySelector(".search-wrap");
    
        search.classList.add("show");
    })
})


btnExit.addEventListener("click", function() {
    let search = document.querySelector(".search-wrap");

    search.classList.remove("show");
})
};
showSearch();