import cards from '../data/cards';

function putStatsToLocalStoragePlayWrong(word) {
  let wordWrong = word + ' wrong';
  for (let i = 0; i < cards.length; i++) {
    for (let j = 0; j < cards[i].length; j++) {
      let wordPutInLocalStorage = cards[i][j].word + ' wrong';
      let stringWithWord = localStorage.getItem(wordPutInLocalStorage);
      let stringToNum = Number.parseInt(stringWithWord);
      let getWord = localStorage.getItem(wordPutInLocalStorage);

      if (cards[i][j].word + ' wrong' === wordWrong) {
        cards[i][j].clickedWrong++;

        for (let key in localStorage) {
          if (!localStorage.hasOwnProperty(key)) {
            continue;
          } else {
            if (getWord === null) {
              localStorage.setItem(wordWrong, 1);
            } else {
              stringToNum = cards[i][j].clickedWrong;
              localStorage.setItem(wordWrong, stringToNum);
            }
          }
        }
      }
    }
  }
}

export { putStatsToLocalStoragePlayWrong };
