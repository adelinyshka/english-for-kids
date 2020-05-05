import {
  trainMode,
  playMode,
  rowWithCardsCategoryForPlay,
  rowWithCardsCategoryForTrain,
} from '../generate-variables';
import { removeStatisticsPage } from '../statistics/change-statistic-page';
import { showTrainPage } from '../trainPage/change-train-page';
import { showPlayPage } from '../playPage/change-play-page';
import { creatCategoryForPlay, creatCategoryForTrain } from '../category/generate-categories';

function changeLayoutByClickCheckbox() {
  document.addEventListener('change', function () {
    removeStatisticsPage();
    if (trainMode()) {
      if (rowWithCardsCategoryForTrain.innerHTML === '') {
        creatCategoryForTrain();
      }
      showTrainPage();
    }
    if (playMode()) {
      if (rowWithCardsCategoryForPlay.innerHTML === '') {
        creatCategoryForPlay();
      }
      showPlayPage();
    }
  });
}

export { changeLayoutByClickCheckbox };
