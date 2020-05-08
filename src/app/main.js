import {
  trainPage,
  rowWithCardsCategoryForTrain
} from './variables';
import { moveInsideCategory } from './category/move-inside-category-on-click';
import { resetStats } from './listeners';
import { generateLayoutOnLoad } from './main/generate-layout-onload';
import { changeLayoutByClickCheckbox } from './main/change-layout-by-switcher';

generateLayoutOnLoad();
changeLayoutByClickCheckbox();
moveInsideCategory(rowWithCardsCategoryForTrain, trainPage);
moveInsideCategory(rowWithCardsCategoryForPlay, playPage);
resetStats();