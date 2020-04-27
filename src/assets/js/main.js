import {
  trainPage,
  playPage,
  checker,
  rowWithCardsCategoryForTrain,
  rowWithCardsCategoryForPlay,
} from './generate-dom/generate-variables';
import { moveInsideCategory } from './changes-in-dom/move-inside-category-on-click';
import { closeOnClick, flipCardOnClick } from './listeners';
import { generateLayoutOnLoad } from './generate-dom/generate-layout-onload';
import { initGame, playYes, playNo } from './changes-in-dom/init-game';

generateLayoutOnLoad();
moveInsideCategory(rowWithCardsCategoryForTrain, trainPage);
moveInsideCategory(rowWithCardsCategoryForPlay, playPage);
flipCardOnClick();

closeOnClick();
initGame();
