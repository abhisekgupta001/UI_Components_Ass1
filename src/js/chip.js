// "Not happy with my js code so haven't implement any functionality to the second tabs with icons"

const inputChips = document.getElementById("input__chips");
const chipsDisplayer = document.querySelector(".chips__displayer");



inputChips.addEventListener("change", () =>{
    const inputValue = inputChips.value; 
    const chip = document.createElement("div");
    chip.className = "chip";
    
    chip.innerHTML = `<div class="chip__icon"><i class="bx bx-lemon"></i></div>
    <div><p class="chip__text">${inputValue}</p></div>
    <div class="btn__close"><i class="bx bxs-x-circle bx__chip"></i></div>`
    chipsDisplayer.appendChild(chip);
    inputChips.value = "";
    const btnClose = document.querySelectorAll(".btn__close");
    btnClose.forEach((i)=>{
        i.addEventListener("click",()=>{
            i.parentElement.style.display = "none";
        })
    })

} )

