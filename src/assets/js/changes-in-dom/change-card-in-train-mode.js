import { trainMode } from '../generate-dom/generate-variables';
import { putStatsToLocalStorage } from './../localStorage/put-stats-for-train-mode';
import cards from '../data/cards.data';

function changeCardInTrainMode() {
  const cardsClicked = Array.from(document.querySelectorAll('.scene'));

  if (trainMode()) {
    cardsClicked.forEach((element) => {
      const btnInCard = element.querySelector('a.btn-turn');
      const cardFace = element.querySelector('.card');
      const audio = element.querySelector('audio');

      element.addEventListener('click', function (e) {
        e.preventDefault();
        if (e.target === btnInCard) {
          cardFace.classList.add('is-flipped');
        } else audio.play();
        putStatsToLocalStorage(element);
      });

      cardFace.addEventListener('mouseleave', function (e) {
        if (e.target.classList.contains('is-flipped')) {
          cardFace.classList.remove('is-flipped');
        }
      });
    });
  } else {
    cardsClicked.length = 0;
  }
}

export { changeCardInTrainMode };
