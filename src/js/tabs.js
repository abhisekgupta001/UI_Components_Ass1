const tab1 = document.querySelector(".tab1");
const tab2 = document.querySelector(".tab2");
const tab3 = document.querySelector(".tab3");

tab1.addEventListener("click", ()=>{
        tab1.classList.add("active__tab");
        tab2.classList.remove("active__tab");
        tab3.classList.remove("active__tab");
})

tab2.addEventListener("click", ()=>{
    tab2.classList.add("active__tab");
    tab1.classList.remove("active__tab");
    tab3.classList.remove("active__tab");
})

tab3.addEventListener("click", ()=>{
    tab3.classList.add("active__tab");
    tab2.classList.remove("active__tab");
    tab1.classList.remove("active__tab");
})