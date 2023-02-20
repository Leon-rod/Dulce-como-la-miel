let menuElements = document.querySelectorAll(".menu-element");
menuElements.forEach(menuElement => {
    menuElement.addEventListener("click", ()=> {
        menuElement.classList.toggle("arrow");
        let height = 0;
        // let nextMenuElement = menuElement.nextElementSibling;
        if (menuElement.clientHeight<"200") {
            height = menuElement.scrollHeight;
        };
        menuElement.style.height = `${height}px`;
    })
});






let despliegue = document.querySelector(".fa-bars");
let despMenu = document.querySelector(".menu")
despliegue.addEventListener("click", ()=> {
    despMenu.classList.toggle("deploy")
})