import cards from '../data/cards.data';

function putStatsToLocalStorage(word) {
  let idWord = word.childNodes.item(1).id;
  let neededWord = idWord.slice(5);

  for (let i = 0; i < cards.length; i++) {
    for (let j = 0; j < cards[i].length; j++) {
      let wordPutInLocalStorage = cards[i][j].word;
      let stringWithWord = localStorage.getItem(wordPutInLocalStorage);
      let stringToNum = Number.parseInt(stringWithWord);
      let getWord = localStorage.getItem(wordPutInLocalStorage);

      if (cards[i][j].word === neededWord) {
        cards[i][j].clickedTrain++;

        for (let key in localStorage) {
          if (!localStorage.hasOwnProperty(key)) {
            continue;
          } else {
            if (getWord === null) {
              localStorage.setItem(wordPutInLocalStorage, 1);
            } else {
              stringToNum = cards[i][j].clickedTrain;
              localStorage.setItem(wordPutInLocalStorage, stringToNum);
            }
          }
        }
      }
    }
  }
}

export { putStatsToLocalStorage };
