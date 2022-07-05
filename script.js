/*
Add functionality in JS for slider to: 
1. Toolbar button hides/shows toolbar; 
2. Back button shows rewinds to previous img; 
3. Pause/play button changes icon and stops/starts carousel; 
4. Forward button takes to next image immediately. 
5. Shuffle button takes to one random image. And after that images goes in order. (Not random all the time, but just one image). 
6. Add functionality to use .fade class to make fade in, fade out between slides. 
*/

//Your JS goes here
const images = [
    "images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg"
];

const imageElement = document.querySelector('img');

imageElement.src = images[0];
let imgIndex = 0;
let pause = false;
let hide = false;
let max = 5;
let min = 0;
let ran;

function changeImage() {
    if (imgIndex >= images.length - 1) {
        imgIndex = 0;
    }
    else {
        imgIndex++;
    }
    imageElement.src = images[imgIndex];
}

let intervalID = setInterval(changeImage, 2000);

document.querySelector('#slider-previous').addEventListener('click', previousImage);
document.querySelector('#slider-toggle').addEventListener('click', sliderToggle);
document.querySelector('#slider-next').addEventListener('click', nextImage);
document.querySelector('#slider-random').addEventListener('click', random);
document.querySelector('#toolbar').addEventListener('click', toolbarToggle);

function previousImage() {
    if (imgIndex === 0) {
        imgIndex = 5;
        imageElement.src = images[5];
    } else {
        imageElement.src = images[imgIndex - 1];
        imgIndex--;
    }

}
let playIcon = document.querySelector('#slider-toggle i');

function sliderToggle() {
    pause = !pause;
    if (pause) {
        clearInterval(intervalID);
    } else {
        intervalID = setInterval(changeImage, 2000);
    }

    playIcon.classList.toggle('fa-play');
    playIcon.classList.toggle('fa-pause');
}

function nextImage() {

    if (imgIndex === 5) {
        imgIndex = 0;
        imageElement.src = images[5];
    } else {
        imageElement.src = images[imgIndex++];
    }
}

function random() {

    ran = Math.floor((Math.random() * (max - min + 1)) + min);
    imageElement.src = images[ran];
}

function toolbarToggle() {
    // hide = !hide;
    let navigation = document.getElementById("navigation");

    if (navigation.style.display === "none") {
        navigation.style.display = "block";

    } else {
        navigation.style.display = "none";

    }

}