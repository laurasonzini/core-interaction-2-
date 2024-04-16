var quotes = ["The universe sends us exactly what we are ready for at the exact time we need it in our lives","Your fear of looking stupid is holding you back!","There is no “right” time, just time, and what you do with it", "The act of creating something is always more important than the result", "Find what you’d die for. Then live for it.", "A secret to happiness is to be as weird as you like and the wrong people will leave the party but the right ones will join the dance.", "People are going to talk about you no matter what you do, so you might as well do whatever brings you joy and live your best life!", "Your direction is more important than your speed", "You’re not stuck. You’re learning, you’re growing, you’re preparing to bloom"];
    function changeQuote(){
var quote = document.getElementById("text");
var item = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerHTML = item;

    }
    var backButton = document.getElementById('back');

backButton.addEventListener('click', function() {
    // Go back to the main page when the button is clicked
    window.location.href = '../home/second.html'; // Replace 'main-page.html' with the actual URL of your main page
});
