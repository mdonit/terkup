/*
* File: app.js
* Author: Maráki Donát
* Copyright: 2022, Maráki Donát
* Group: Szoft I E 1/3
* Date: 2022-03-29
* Github: https://github.com/[sajat github]/
* Licenc: GNU GPL
*/

const radiusElement = document.querySelector("#radius");
const heightElement = document.querySelector("#height");
const volumeElement = document.querySelector("#volume");
const volumeCalcButton = document.querySelector("#volumeCalcButton");

volumeCalcButton.addEventListener("click", () => {
    
    let radius = Number(radiusElement.value);
    let height = Number(heightElement.value);
    //Térfogat kiszámítása
    let volume = (1/3) * Math.pow(radius, 2) * Math.PI * height;
    
    //console.log(volume.toFixed(2))
    volumeElement.value = volume.toFixed(2);
});