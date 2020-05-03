import { trainMode } from '../generate-dom/generate-variables';
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

        let idWord = element.childNodes.item(1).id;
        let neededWord = idWord.slice(5);

        for (let i = 0; i < cards.length; i++) {
          for (let j = 0; j < cards[i].length; j++) {
            if (cards[i][j].word === neededWord) {
              cards[i][j].clickedTrain++;
              for (let key in localStorage) {
                if (!localStorage.hasOwnProperty(key)) {
                  continue;
                } else {
                  let m = localStorage.getItem(cards[i][j].word);

                  if (m === null) {
                    localStorage.setItem(cards[i][j].word, 1);
                  } else {
                    let t = localStorage.getItem(cards[i][j].word);
                    let c = Number.parseInt(t);
                    c = cards[i][j].clickedTrain;
                    localStorage.setItem(cards[i][j].word, c);
                  }
                }
              }
            }
          }
        }
      });

      cardFace.addEventListener('mouseleave', function (e) {
        if (e.target.classList.contains('is-flipped')) {
          cardFace.classList.remove('is-flipped');
        }
      });
    });
  } else {
    cardsClicked.length = 0;
    audio.pause();
  }
}

export { changeCardInTrainMode };
