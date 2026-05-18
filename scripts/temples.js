const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

const lastModified = document.querySelector("#lastModified");

lastModified.textContent = document.lastModified;

const hamburger = document.querySelector("#hamburger");

const navMenu = document.querySelector("#navMenu");

hamburger.addEventListener("click", () => {

    navMenu.classList.toggle("show");

    if (navMenu.classList.contains("show")) {

        hamburger.textContent = "✖";

    } else {

        hamburger.textContent = "☰";
    }

});