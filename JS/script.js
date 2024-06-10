const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".navLinks");
const body = document.querySelector("body");

// La fonction "changeMenuIcon" permet de changer l'icon du menu hamburger (menu hamburger ou croix)
changeMenuIcon = (icon) => {
    icon.classList.toggle("fa-times")
}

// Les lignes ci-dessous permettent d'afficher ou non le menu hamburger
menu.addEventListener("click", () => {
    navLinks.classList.toggle("mobileMenu");

    if (navLinks.classList.contains("mobileMenu")) {
        body.style.margin = "0"
        body.style.height = "100%"
        body.style.overflow = "hidden"
    } else {
        body.style.margin = "auto"
        body.style.height = "100%"
        body.style.overflow = "visible"
    }
})