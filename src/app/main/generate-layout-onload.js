import { trainMode} from '../variables';
import { hideMenu, toggleMenu } from '../menu/change-menu';
import {  creatCategoryForTrain } from '../category/create-category';
import {showTrainPage} from '../trainPage/change-train-page';
import { createMenu } from '../menu/create-menu';
import { generateTbodyStatistic } from '../statistics/generate-tbody-statistic';
import cards from '../data/cards';
import { sortGrid, sortStatisticTable } from '../statistics/sort-statistic-table';

function generateLayoutOnLoad() {
  window.addEventListener('load', function () {
    createMenu();
    hideMenu();
    toggleMenu();
    creatCategoryForTrain();
    trainMode();
    showTrainPage();
    generateTbodyStatistic(cards);
    sortStatisticTable();
    sortGrid();
  });
}
export { generateLayoutOnLoad };
