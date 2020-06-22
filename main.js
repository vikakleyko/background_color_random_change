"use strict";

let colorTitle = document.querySelector(".color-title"),
button = document.getElementsByTagName("button");

const generateColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    colorTitle.textContent = "#" + randomColor;
    document.body.style.background =  "#" + randomColor;
};

button[0].addEventListener("click", generateColor);