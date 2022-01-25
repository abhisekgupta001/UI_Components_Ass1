const headerContainer2 = document.querySelector(".header__container2");

headerContainer2.addEventListener("scroll", ()=>{

    const header = document.getElementById("header");
    const headerLocation = document.querySelector(".header__location");

    if(headerContainer2.scrollTop >= 1)
    {
        header.classList.add("header__collapsed");
        headerLocation.style.display = "none";
    }
    else
    {
        header.classList.remove("header__collapsed");
        headerLocation.style.display = "block";
    }

});