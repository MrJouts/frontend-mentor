window.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("navbar-button");
    let navbar = document.getElementById("navbar-container");
    let img = document.querySelector("#navbar-button img");

    button.addEventListener("click", () => {
        toggleNav();
    });

    let toggleNav = () => {
        if (navbar.className.includes("closed")) {
            navbar.classList.remove("closed");
            img.setAttribute("src", "./assets/images/icon-menu-close.svg");
        } else {
            navbar.classList.add("closed");
            img.setAttribute("src", "./assets/images/icon-menu.svg");
        }
    };
});
