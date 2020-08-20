import cards from '../data/cards';

function putStatsToLocalStoragePlay(word) {
  let wordToStats = word + ' play';

  for (let i = 0; i < cards.length; i++) {
    for (let j = 0; j < cards[i].length; j++) {
      let wordPutInLocalStorage = cards[i][j].word + ' play';
      let stringWithWord = localStorage.getItem(wordPutInLocalStorage);
      let stringToNum = Number.parseInt(stringWithWord);
      let getWord = localStorage.getItem(wordPutInLocalStorage);

      if (cards[i][j].word + ' play' === wordToStats) {
        cards[i][j].clickedPlay++;

        for (let key in localStorage) {
          if (!localStorage.hasOwnProperty(key)) {
            continue;
          } else {
            if (getWord === null) {
              localStorage.setItem(wordToStats, 1);
            } else {
              stringToNum = cards[i][j].clickedPlay;
              localStorage.setItem(wordToStats, stringToNum);
            }
          }
        }
      }
    }
  }
}

export { putStatsToLocalStoragePlay };
