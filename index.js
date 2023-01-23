const openMenu = document.querySelector(".openIcon");
const closeMenu = document.querySelector(".closeIcon");
const NavigationMenu = document.getElementById("nav-links")

openMenu.addEventListener("click", () => {
    NavigationMenu.classList.add("opening");
    NavigationMenu.classList.remove("closing");
})

closeMenu.addEventListener("click", () => {
    NavigationMenu.classList.add("closing");
    NavigationMenu.classList.remove("opening");
})