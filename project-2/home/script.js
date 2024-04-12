document.addEventListener('DOMContentLoaded', function() {
    const redDot = document.getElementById('red-dot');

    
    document.addEventListener('mousemove', function(event) {
        redDot.style.left = (event.clientX - redDot.offsetWidth / 2) + 'px';
        redDot.style.top = (event.clientY - redDot.offsetHeight / 2) + 'px';
    });
});

const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('circle');
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('circle');
    });
});