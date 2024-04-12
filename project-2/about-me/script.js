document.addEventListener('DOMContentLoaded', function() {
    const redDot = document.getElementById('red-dot');
  
    
    document.addEventListener('mousemove', function(event) {
        redDot.style.left = (event.clientX - redDot.offsetWidth / 2) + 'px';
        redDot.style.top = (event.clientY - redDot.offsetHeight / 2) + 'px';
    });
  });
  
var backButton = document.getElementById('back');

backButton.addEventListener('click', function() {
    // Go back to the main page when the button is clicked
    window.location.href = '/project-2/home/second.html'; // Replace 'main-page.html' with the actual URL of your main page
});