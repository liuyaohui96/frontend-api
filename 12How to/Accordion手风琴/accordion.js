let cardsHeader = document.querySelectorAll('.card-header');
cardsHeader.forEach(card => {
  card.addEventListener('click', function() {
    this.classList.toggle('active');
    let cardBody = this.nextElementSibling;
    cardBody.classList.toggle('show');
  });
});
