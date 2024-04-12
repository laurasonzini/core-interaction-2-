document.addEventListener('DOMContentLoaded', function() {
    const redDot = document.getElementById('red-dot');

    
    document.addEventListener('mousemove', function(event) {
        redDot.style.left = (event.clientX - redDot.offsetWidth / 2) + 'px';
        redDot.style.top = (event.clientY - redDot.offsetHeight / 2) + 'px';
    });
});
var images =  ["FOTOS/cover.jpg", "FOTOS/Portfolio2.jpg", "FOTOS/Portfolio3.jpg", "FOTOS/Portfolio4.jpg", "FOTOS/Portfolio5.jpg", "FOTOS/Portfolio6.jpg","FOTOS/Portfolio7.jpg","FOTOS/Portfolio8.jpg","FOTOS/Portfolio9.jpg", "FOTOS/Portfolio10.jpg", "FOTOS/Portfolio11.jpg"];
var i = 0; // Start with the first image
var image = document.getElementById("image");

function nextImage() {
    // Increment i to display the next image in the array
    i++;
    // If i goes beyond the last index, loop back to the first image
    if (i >= images.length) {
        i = 0;
    }
    // Set the src attribute of the image element to the new image
    image.src = images[i];
}

function prevImage() {
    // Decrement i to display the previous image in the array
    i--;
    // If i goes below 0, loop to the last image
    if (i < 0) {
        i = images.length - 1;
    }
    // Set the src attribute of the image element to the new image
    image.src = images[i];
}

var nextButton = document.getElementById('nextButton'); // Select the next button by its ID
nextButton.addEventListener('click', nextImage); // Bind the nextImage function to the click event of the next button

var prevButton = document.getElementById('prevButton'); // Select the previous button by its ID
prevButton.addEventListener('click', prevImage); // Bind the prevImage function to the click event of the previous button

var backButton = document.getElementById('home');

backButton.addEventListener('click', function() {
    // Go back to the main page when the button is clicked
    window.location.href = '/project-2/home/second.html'; // Replace 'main-page.html' with the actual URL of your main page
});
