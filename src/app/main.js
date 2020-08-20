import {
  trainPage,
  rowWithCardsCategoryForTrain
} from './variables';
import { moveInsideCategory } from './category/move-inside-category-on-click';
import { resetStats } from './listeners';
import { generateLayoutOnLoad } from './main/generate-layout-onload';
import { changeLayoutBySwitcher } from './main/change-layout-by-switcher';

generateLayoutOnLoad();
changeLayoutBySwitcher();
moveInsideCategory(rowWithCardsCategoryForTrain, trainPage);
moveInsideCategory(rowWithCardsCategoryForPlay, playPage);
resetStats();