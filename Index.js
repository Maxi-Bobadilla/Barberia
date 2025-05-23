const Cards = document.querySelectorAll('.card');

Cards.forEach( card => {
    card.addEventListener('click', () => {
    window.location.href='/barberia.html';
    })
});