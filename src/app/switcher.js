import {
  playPage, rowForAnswers, trainPage, titleInHeader,  rowForButtonStartGame,
  rowWithPlayCards,rowWithTrainCards,
  bgColorTrain,
} from './variables';
import {cleanTrainPage, showTrainPage} from './trainPage/change-train-page';
import {cleanPlayPage, showPlayPage} from './playPage/change-play-page';
import CardComponent from './card/card.component';
import cards from './data/cards';
import categoryData from "./data/category";
import {changeCardInTrainMode} from "./card/change-card-in-train-mode";
import {initGame} from "./game/init-game";


function createPlayCards(neededCategory) {
  showPlayPage();
  cleanPlayPage();

  titleInHeader.innerText =  neededCategory;
  rowWithPlayCards.innerHTML='';

    let card = new CardComponent();
    rowWithPlayCards.id = `inside${neededCategory}Play`;

    for (let i = 0; i < categoryData.length; i++) {
      if (categoryData[i].word === neededCategory) {
        card.iterateArrCardPlay(cards, i, rowWithPlayCards);
      }
    }

    playPage.prepend(rowForAnswers);
    playPage.append(rowWithPlayCards);
    rowWithPlayCards.append(rowForButtonStartGame);

    initGame();

}

function createTrainCards(neededCategory) {

  showTrainPage();
  cleanTrainPage();

  rowWithTrainCards.innerHTML='';
  titleInHeader.innerText = neededCategory;

  let card = new CardComponent();

  rowWithTrainCards.id = `inside${neededCategory}Train`;
  for (let i = 0; i < categoryData.length; i++) {
    if (categoryData[i].word === neededCategory) {
      card.iterateArrCard(cards, i, rowWithTrainCards, bgColorTrain);
    }
  }
  trainPage.append(rowWithTrainCards);
  changeCardInTrainMode();
}

export { createPlayCards,  createTrainCards};
