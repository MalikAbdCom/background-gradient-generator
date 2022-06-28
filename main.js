const body = document.querySelector('.body');
const inputLeft = document.querySelector('#left-color');
const inputRight = document.querySelector('#right-color');
const dataColorGradient = document.querySelector('[data-color-gradient]');





function changeBackground() {
    body.style.backgroundImage = `linear-gradient(to right, ${inputLeft.value}, ${inputRight.value})`
    dataColorGradient.textContent = `linear-gradient(to right, ${inputLeft.value}, ${inputRight.value})`
}

inputLeft.addEventListener("input", changeBackground);
inputRight.addEventListener("input", changeBackground);

