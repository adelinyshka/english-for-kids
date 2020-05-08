import cards from '../data/cards';

function putStatsToLocalStoragePlayRight(word) {
  let wordToStats = word + ' right';
  // let neededWordPlay = wordToStats.slice(0, -4);

  for (let i = 0; i < cards.length; i++) {
    for (let j = 0; j < cards[i].length; j++) {
      let wordPutInLocalStorage = cards[i][j].word + ' right';
      let stringWithWord = localStorage.getItem(wordPutInLocalStorage);
      let stringToNum = Number.parseInt(stringWithWord);
      let getWord = localStorage.getItem(wordPutInLocalStorage);

      if (cards[i][j].word + ' right' === wordToStats) {
        cards[i][j].clickedRight++;

        for (let key in localStorage) {
          if (!localStorage.hasOwnProperty(key)) {
            continue;
          } else {
            if (getWord === null) {
              localStorage.setItem(wordToStats, 1);
            } else {
              stringToNum = cards[i][j].clickedRight;
              localStorage.setItem(wordToStats, stringToNum);
            }
          }
        }
      }
    }
  }
}

export { putStatsToLocalStoragePlayRight };
