const carouselSlide = document.querySelector('.courSlide');
const carouselImages = document.querySelectorAll('.courSlide img');
const bottles = document.querySelectorAll('.bottle');
const yellowimgs = document.querySelector('#yellowimgs');
const redimgs = document.querySelector('#redimgs');
const greenimgs = document.querySelector('#greenimgs');
const greentext = document.querySelector('.greenText');
const redtext = document.querySelector('.redText');
const yellowtext = document.querySelector('.yellowText');
const nav = document.querySelector('.nav');
const navButBox = document.querySelector('.navTog div');

const navBut = document.querySelector('.navTog');
const navBut2 = document.querySelector('.navTog2');
const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')

let counter = 0;

const size = carouselImages[0].clientWidth;
nav.style.transform = "translateY(100px)";
nav.style.opacity = "0";
navBut.addEventListener('click', () => {
    navButBox.style.display = "none";
    navBut.classList.toggle("navPop");
    navBut2.classList.toggle("navTog2Top");
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    setTimeout(() => {
        nav.style.transition = "all .7s ease-in";
        nav.style.transform = "translateY(0px)";
        nav.style.opacity = "1";

        nav.style.display = "block";
    }, 700);
});
navBut2.addEventListener('click', () => {
    setTimeout(() => {
        navButBox.style.display = "block";
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
    }, 700);
    nav.style.display = "none";
    nav.style.transform = "translateY(100px)";
    nav.style.opacity = "0";
    navBut.classList.toggle("navPop");
    navBut2.classList.toggle("navTog2Top");
})

nextBtn.addEventListener('click', () => {


    if (counter >= 2) return;

    if (counter === 0) {
        bottles[0].style.display = "none";
        bottles[1].style.display = "block";
        yellowimgs.style.display = "block";
        redimgs.style.display = "none";
        redtext.style.display = "none";

        setTimeout(() => {
            yellowtext.style.display = "block";
        }, 1000);
    }
    if (counter === 1) {
        bottles[1].style.display = "none";
        bottles[2].style.display = "block";
        greenimgs.style.display = "block";
        yellowimgs.style.display = "none";
        yellowtext.style.display = "none";

        setTimeout(() => {
            greentext.style.display = "block";
        }, 1000);
    }
    carouselSlide.style.transition = "transform 01s ease-in-out";
    counter++;
    carouselSlide.style.transform = `translateX(${-size * counter}px`;
});
prevBtn.addEventListener('click', () => {

    if (counter <= 0) return;

    if (counter === 1) {
        bottles[1].style.display = "none";
        bottles[0].style.display = "block";
        yellowimgs.style.display = "none";
        redimgs.style.display = "block";
        yellowtext.style.display = "none";

        setTimeout(() => {
            redtext.style.display = "block";
        }, 1000);
    }
    if (counter === 2) {
        bottles[2].style.display = "none";
        bottles[1].style.display = "block";
        greenimgs.style.display = "none";
        yellowimgs.style.display = "block";
        greentext.style.display = "none";

        setTimeout(() => {
            yellowtext.style.display = "block";
        }, 1000);
    }

    carouselSlide.style.transition = "transform 01s ease-in-out";
    counter--;
    carouselSlide.style.transform = `translateX(${-size * counter}px`;

});