import {
  trainPage,
  playPage,
  rowWithCardsCategoryForTrain,
  rowWithCardsCategoryForPlay,
  checker,
  trainMode,
  playMode,
} from './generate-dom/generate-variables';
import { moveInsideCategory } from './changes-in-dom/move-inside-category-on-click';
import { closeOnClick, flipCardOnClick, resetStats } from './listeners';
import { generateLayoutOnLoad } from './generate-dom/generate-layout-onload';
import { initGame } from './changes-in-dom/init-game';

// import { moveBetweenPagesInsideCategoriesBySwitcher } from './changes-in-dom/test-switcher';
import { createPageInsideCategory } from './generate-dom/generate-page-inside-category';
import { changeCardInTrainMode } from './changes-in-dom/change-card-in-train-mode';
import CardComponent from './card.component';
import cards from './data/cards.data';

generateLayoutOnLoad();
moveInsideCategory(rowWithCardsCategoryForTrain, trainPage);
moveInsideCategory(rowWithCardsCategoryForPlay, playPage);
flipCardOnClick();
closeOnClick();
resetStats();

if (playMode()) {
  initGame();
}

function getNeededRowIdTrain() {
  if (trainMode()) {
    let neededRow = document.querySelector('#trainPage div.d-block h3');
    console.log(neededRow.innerText);
    return neededRow.innerText;
  }
}

function getNeededRowIdPlay() {
  if (playMode()) {
    let neededRow = document.querySelector('#playPage div.d-block h3');
    console.log(neededRow.innerText);
    return neededRow.innerText;
  }
}

function getTitleFromId(word) {
  return word.substring(6, word.length - 5);
}
