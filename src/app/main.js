import {
  trainPage,
  playPage,
  rowWithCardsCategoryForTrain,
  rowWithCardsCategoryForPlay,
  playMode,
} from './generate-variables';
import { moveInsideCategory } from './category/move-inside-category-on-click';
import { resetStats } from './listeners';
import { generateLayoutOnLoad } from './main/generate-layout-onload';
import { initGame } from './game/init-game';

generateLayoutOnLoad();
moveInsideCategory(rowWithCardsCategoryForTrain, trainPage);
moveInsideCategory(rowWithCardsCategoryForPlay, playPage);
resetStats();

if (playMode()) { initGame(); }
