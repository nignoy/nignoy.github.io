const randomNumber1 = Math.ceil(Math.random() * 255);
const randomNumber2 = Math.ceil(Math.random() * 255);
const randomNumber3 = Math.ceil(Math.random() * 255);
const randomColorNo1 = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3}, 0.2)`;
const randomColorNo2 = `rgb(${randomNumber1*0.5}, ${randomNumber2*0.5}, ${randomNumber3*0.5}, 0.2)`;

document.body.style.backgroundImage = `linear-gradient(${randomColorNo1},${randomColorNo2},${randomColorNo1})`;
body.classList.add(BG_CLASS);