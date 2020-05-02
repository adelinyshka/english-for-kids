import { trainMode } from './generate-variables';
import { removeStatisticsPage } from '../changes-in-dom/change-statistic-page';
import { hideMenu, toggleMenu } from '../changes-in-dom/change-menu';
import { creatCategoryForPlay, creatCategoryForTrain } from './generate-categories';
import { showTrainPage } from '../changes-in-dom/change-train-page';
import { showPlayPage } from '../changes-in-dom/change-play-page';
import { createMenu } from './generate-menu';
import { changeLayoutByClickCheckbox } from '../changes-in-dom/change-layout-by-switcher';
import generateTbodyStatistic from './generate-tbody-statistic';
import cards from '../data/cards.data';
import { sortGrid, sortStatisticTable } from '../changes-in-dom/sort-statistic-table';

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
