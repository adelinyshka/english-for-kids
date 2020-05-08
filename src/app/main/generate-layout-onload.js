import { trainMode} from '../variables';
import { hideMenu, toggleMenu } from '../menu/change-menu';
import {  creatCategoryForTrain } from '../category/generate-categories';
import {showTrainPage} from '../trainPage/change-train-page';
import { createMenu } from '../menu/generate-menu';
import { generateTbodyStatistic } from '../statistics/generate-tbody-statistic';
import cards from '../data/cards.data';
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
