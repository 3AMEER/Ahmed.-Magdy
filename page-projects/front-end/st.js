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
}, 2000);
