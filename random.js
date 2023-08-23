"use strict";
window.addEventListener("load", getRandom);

function getRandom() {
  let maxNumb = 10;
  let rndNum = generateRandomNumber(maxNumb);

  console.log(rndNum);

  document.querySelector(".randomp").textContent = rndNum;

  function generateRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  document.querySelector("button").addEventListener("click", getRandom);
}
