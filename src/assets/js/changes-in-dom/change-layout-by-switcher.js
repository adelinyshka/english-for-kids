import {
  trainMode,
  playMode,
  rowWithCardsCategoryForPlay,
  rowWithCardsCategoryForTrain,
  title,
} from '../generate-dom/generate-variables';
import { removeStatisticsPage } from '../changes-in-dom/change-statistic-page';
import { changeMenuBg } from '../changes-in-dom/change-menu';
import { showTrainPage } from '../changes-in-dom/change-train-page';
import { showPlayPage } from '../changes-in-dom/change-play-page';
import { creatCategoryForPlay, creatCategoryForTrain } from '../generate-dom/generate-categories';

function changeLayoutByClickCheckbox() {
  document.addEventListener('change', function () {
    if (trainMode()) {
      if (title) {
        console.log('yes for title');
      } else {
        if (rowWithCardsCategoryForTrain.innerHTML === '') {
          removeStatisticsPage();
          changeMenuBg('trainColor');
          creatCategoryForTrain();
          showTrainPage();
        } else {
          removeStatisticsPage();
          changeMenuBg('trainColor');
          showTrainPage();
        }
      }
    }
    if (playMode()) {
      if (title) {
        console.log('yes for title Play mode');
      } else {
        if (rowWithCardsCategoryForPlay.innerHTML === '') {
          removeStatisticsPage();
          changeMenuBg('playColor');
          creatCategoryForPlay();
          showPlayPage();
        } else {
          removeStatisticsPage();
          changeMenuBg('playColor');
          showPlayPage();
        }
      }
    }
  });
}

export { changeLayoutByClickCheckbox };
