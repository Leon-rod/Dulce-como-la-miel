let menuElements = document.querySelectorAll(".menu-element--click")
let icon = document.querySelectorAll(".fa-caret-right")

menuElements.forEach(menuElement => {
    menuElement.addEventListener("click", ()=> {
        icon.forEach(iconElement => {
            iconElement.classList.toggle("arrow")
        })});
        let height = 0;
        let menu = menuElement.nextElementSibling;
        console.log(menu.scrollHeight)
    });