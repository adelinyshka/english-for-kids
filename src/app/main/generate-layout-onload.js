import { trainMode } from '../generate-variables';
import { removeStatisticsPage } from '../statistics/change-statistic-page';
import { hideMenu, toggleMenu } from '../menu/change-menu';
import { creatCategoryForPlay, creatCategoryForTrain } from '../category/generate-categories';
import { showTrainPage } from '../trainPage/change-train-page';
import { showPlayPage } from '../playPage/change-play-page';
import { createMenu } from '../menu/generate-menu';
import { changeLayoutByClickCheckbox } from './change-layout-by-switcher';
import { generateTbodyStatistic } from '../statistics/generate-tbody-statistic';
import cards from '../data/cards.data';
import { sortGrid, sortStatisticTable } from '../statistics/sort-statistic-table';

function generateLayoutOnLoad() {
  window.addEventListener('load', function () {
    createMenu();
    hideMenu();
    changeLayoutByClickCheckbox();
    toggleMenu();
    generateTbodyStatistic(cards);
    sortStatisticTable();
    sortGrid();

    if (trainMode()) {
      removeStatisticsPage();
      creatCategoryForTrain();
      showTrainPage();
    } else {
      removeStatisticsPage();
      creatCategoryForPlay();
      showPlayPage();
    }
  });
}
export { generateLayoutOnLoad };
