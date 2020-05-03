import {
  close,
  containerItem,
  finalPage,
  playPage,
  resetBtn,
  rowWithCardsCategoryForPlay,
  statisticsPage,
} from './generate-dom/generate-variables';
import { cleanPlayPage } from './changes-in-dom/change-play-page';
import { createEnviromentForCategories } from './helpers';
import { cleanTrainPage } from './changes-in-dom/change-train-page';
import { createStatisticsPage } from './changes-in-dom/change-statistic-page';
import { generateTbodyStatistic } from './generate-dom/generate-tbody-statistic';
import cards from './data/cards.data';

function closeOnClick() {
  close.addEventListener('click', function () {
    finalPage.classList.add('d-none');
    cleanPlayPage();
    createEnviromentForCategories(playPage, rowWithCardsCategoryForPlay);
  });
}

function flipCardOnClick() {
  containerItem.forEach((a) => {
    a.addEventListener('click', flipCard);
  });
}

function resetStats() {
  resetBtn.addEventListener('click', function () {
    localStorage.clear();
    location.reload();
  });
}

export { closeOnClick, flipCardOnClick, resetStats };
