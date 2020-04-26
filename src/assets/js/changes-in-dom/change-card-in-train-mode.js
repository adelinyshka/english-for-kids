function changeCardInTrainMode() {
  const cardsClicked = Array.from(document.querySelectorAll('.scene'));

  cardsClicked.forEach((element) => {
    const btnInCard = element.querySelector('a.btn-turn');
    const cardFace = element.querySelector('.card');
    const audio = element.querySelector('audio');

    element.addEventListener('click', function (e) {
      e.preventDefault();
      if (e.target === btnInCard) {
        cardFace.classList.add('is-flipped');
      } else audio.play();
    });

    cardFace.addEventListener('mouseleave', function (e) {
      if (e.target.classList.contains('is-flipped')) {
        cardFace.classList.remove('is-flipped');
      }
    });
  });
}

export { changeCardInTrainMode };
