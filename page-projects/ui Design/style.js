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


// Start Action For Fav
let icons = document.querySelectorAll(".love");

for(let i = 0; i < icons.length; i++){
    let love = icons[i];

    love.onclick = function(){
        love.style.cssText = "color: red;";
    }
}
// Strat loader
let loader = document.querySelector(".loader");

setTimeout(() => {
    loader.style.display = "none"
}, 2000);
