import {
  trainMode,
  playMode,
  rowWithCardsCategoryForPlay,
  rowWithCardsCategoryForTrain,
} from '../generate-dom/generate-variables';
import { removeStatisticsPage } from '../changes-in-dom/change-statistic-page';
import { showTrainPage } from '../changes-in-dom/change-train-page';
import { showPlayPage } from '../changes-in-dom/change-play-page';
import { creatCategoryForPlay, creatCategoryForTrain } from '../generate-dom/generate-categories';

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
