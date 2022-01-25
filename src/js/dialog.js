const openBtn = document.querySelector(".dialog__btn--open");
const closeBtn = document.querySelector(".close__btn");
const modal = document.querySelector(".dialog__modal");

openBtn.addEventListener("click", ()=>{
modal.classList.add("show-modal");
})

closeBtn.addEventListener("click",()=>{
modal.classList.remove("show-modal");
})