document.addEventListener('DOMContentLoaded', function() {
    const redDot = document.getElementById('red-dot');

    
    document.addEventListener('mousemove', function(event) {
        redDot.style.left = (event.clientX - redDot.offsetWidth / 2) + 'px';
        redDot.style.top = (event.clientY - redDot.offsetHeight / 2) + 'px';
    });
});
var images =  ["icon-01.png", "icon-02.png", "icon-03.png", "icon-04.png","icon-05.png" ];
var i = 1;
var image = document.getElementById("image");
function changeImage()
{
if (i == 4){
    document.getElementById("button").innerHTML = "start over";
image.src = images[i];
i = i + 1;
} 
else if (i == 5){
    i = 0;
    image.src = images[i];
    document.getElementById("button").innerHTML = "next";
    i = i + 1;
}
else{
    image.src = images[i];
i = i + 1;}

}
var backButton = document.getElementById('back');

backButton.addEventListener('click', function() {
    // Go back to the main page when the button is clicked
    window.location.href = '/project-2/home/second.html'; // Replace 'main-page.html' with the actual URL of your main page
});

