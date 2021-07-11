const images = ["0.jpeg", "1.jpeg", "2.jpeg","3.jpeg","4.jpeg","5.jpeg"];
const BG_CLASS = "bg";


const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
document.body.style.backgroundImage = `url(${bgImage.src})`;
body.classList.add(BG_CLASS);
