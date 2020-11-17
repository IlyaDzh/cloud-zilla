const menuBtn = document.getElementById("mobile-menu-btn");
const navbarMobile = document.getElementById("navbar");
const menuLinks = document.querySelectorAll(".navbar-mobile__list a");

menuBtn.addEventListener("click", function () {
    document.body.parentNode.classList.toggle("menu-show");
});

menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        document.body.parentNode.classList.remove("menu-show");
    });
});
