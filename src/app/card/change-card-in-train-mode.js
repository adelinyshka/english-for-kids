import { trainMode } from '../variables';
import { putStatsToLocalStorage } from '../statistics/put-stats-for-train-mode';

function changeCardInTrainMode() {
  const arrCardsOnPage = Array.from(document.querySelectorAll('.scene'));

  if (trainMode()) {
    arrCardsOnPage.forEach((element) => {
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
    arrCardsOnPage.length = 0;
  }
}

export { changeCardInTrainMode };
