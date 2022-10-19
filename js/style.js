
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    breakpoints: {
    640: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    768: {
        slidesPerView: 4,
        spaceBetween: 40,
    },
    1024: {
        slidesPerView: 5,
        spaceBetween: 50,
    },
    },
});


const boxes = document.querySelectorAll(".box");

const checkBoxes = () => {
    const triggerBottom = (window.innerHeight / 4) * 4;
    boxes.forEach((box) =>{
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) box.classList.add("show");
        else box.classList.remove("show")
    });
};

window.addEventListener("scroll", checkBoxes);
checkBoxes()

// Strat loader
let loader = document.querySelector(".loader");

setTimeout(() => {
    loader.style.display = "none"
}, 3000);
