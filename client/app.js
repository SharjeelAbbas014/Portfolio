function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance*speed}px)`
}
window.addEventListener("scroll", function () {
    parallax("#cpp", window.scrollY, .2), parallax("#photoshop", window.scrollY, .05), parallax("#js", window.scrollY, .1), parallax("#css", window.scrollY, .3), parallax(".main", window.scrollY, .7)
});
const navSlide = () => {
    const burger = document.querySelector(".burger"),
        nav = document.querySelector(".navUl"),
        navLinks = document.querySelector(".navUl li");
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active"), navLinks.classList.toggle("navList-act"), burger.classList.toggle("toggle")
    })
};
navSlide();
const removeBackDiv = backel => {
    const backdiv = document.querySelector(backel),
        projp = document.querySelector(`${backel} p`),
        projh2 = document.querySelector(`${backel} h2`),
        poly = document.querySelector(`${backel} img`);
    backdiv.addEventListener("mouseover", () => {
        projp.style.display = "none", projh2.style.display = "none", poly.style.display = "none"
    }), backdiv.addEventListener("mouseleave", () => {
        projp.style.display = "block", projh2.style.display = "block", poly.style.display = "block"
    })
};
removeBackDiv("#proj1"), removeBackDiv("#proj2"), removeBackDiv("#proj3"), removeBackDiv("#proj4"), removeBackDiv("#proj5"), removeBackDiv("#proj6");