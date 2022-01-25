const buttons = document.querySelectorAll(".btn");
const snacks = document.querySelectorAll(".snack");


buttons.forEach((i) => {
    i.addEventListener("click",()=>{
        i.classList.contains("btn__baseline") ? showSnackBar(snacks[0])
         : i.classList.contains("btn__leading") ? showSnackBar(snacks[1]) 
            : i.classList.contains("btn__stacked") ? showSnackBar(snacks[2])  :
            "";
    })
})

function showSnackBar(snackbar)
{
    snackbar.classList.add("show-snackbar");
    setTimeout(() => {
        snackbar.classList.remove("show-snackbar");
    }, 3000);
}