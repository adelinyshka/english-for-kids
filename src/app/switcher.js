import {
  trainMode,
  playMode,
  checker, playPage, rowForAnswers, trainPage, titleInHeader,  rowForButtonStartGame,
  rowWithPlayCards,rowWithTrainCards,
  bgColorTrain,
} from './generate-variables';
import {cleanTrainPage, showTrainPage} from './trainPage/change-train-page';
import {cleanPlayPage, showPlayPage} from './playPage/change-play-page';
import { creatCategoryForPlay, creatCategoryForTrain } from './category/generate-categories';
import CardComponent from './card/card.component';
import cards from './data/cards.data';
import categoryData from "./data/category.data";
import {changeCardInTrainMode} from "./card/change-card-in-train-mode";
import {initGame} from "./game/init-game";


function createPlayPageInsideCategory(neededCategory) {
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

function createTrainPageInsideCategory(neededCategory) {

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

function changeLayoutByClickCheckbox() {

  checker.addEventListener('change', function () {

    let innerTextTitleInHeader = titleInHeader.innerText;

    if(innerTextTitleInHeader !== 'Main') {
      console.log('not main');

      if (trainMode()) {
        createTrainPageInsideCategory(innerTextTitleInHeader);
      }

      if (playMode()) {
        createPlayPageInsideCategory(innerTextTitleInHeader);
      }
    }
    if(innerTextTitleInHeader === 'Main') {

      if(trainMode()) {
        showTrainPage();
        creatCategoryForTrain();
      }
      if (playMode()) {
        showPlayPage();
        creatCategoryForPlay();
      }
    }
  });
}

export { changeLayoutByClickCheckbox,createPlayPageInsideCategory,  createTrainPageInsideCategory};
