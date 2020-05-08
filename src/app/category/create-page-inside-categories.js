import CardComponent from '../card/card.component';
import cards from '../data/cards';
import {  rowForAnswers, titleInHeader } from '../variables';
import { trainMode, playMode, btnStartGame } from '../variables';
import categoryData from '../data/categories';

function createPageInsideCategory(divCardId, whereToAppend) {

  const cardBlock = document.createElement('div');
  const rowForCards = document.createElement('div');
  const rowForButtonStart = document.createElement('div');
  const bgColorTrain = 'linear-gradient(to top, #fff1eb' + ' 0%, #ace0f9 100%);';
  const bgColorPlay = 'linear-gradient(to top,' + ' #feada6 0%, #f5efef 100%);';

  titleInHeader.innerText = divCardId;
  cardBlock.classList.add('d-block');
  rowForCards.classList.add('row');
  rowForButtonStart.classList.add('col-12', 'd-flex', 'justify-content-center');
  let card = new CardComponent();

  if (trainMode()) {
    rowForCards.id = `inside${divCardId}Train`;
    for (let i = 0; i < categoryData.length; i++) {
      if (categoryData[i].word === divCardId) {
        card.createTrainCards(cards, i, rowForCards, bgColorTrain);
      }
    }
  }

  if (playMode()) {
    rowForCards.id = `inside${divCardId}Play`;
    for (let i = 0; i < categoryData.length; i++) {
      if (categoryData[i].word === divCardId) {
        card.createPlayCards(cards, i, rowForCards, bgColorPlay);
      }
    }

    rowForCards.append(rowForButtonStart);
    rowForCards.append(rowForAnswers);
    rowForButtonStart.append(btnStartGame);
  }

  cardBlock.append(rowForCards);
  whereToAppend.append(cardBlock);
}

export { createPageInsideCategory };
