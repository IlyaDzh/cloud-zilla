const navbar = document.getElementById("navbar");

let timerId;

const throttle = function (func, delay) {
    if (timerId) {
        return;
    }
    timerId = setTimeout(function () {
        func();
        timerId = undefined;
    }, delay);
};

function onScroll() {
    if (window.scrollY >= 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

document.addEventListener("scroll", function () {
    throttle(onScroll, 100);
});
