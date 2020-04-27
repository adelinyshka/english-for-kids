import {
  close,
  containerItem,
  finalPage,
  playPage,
  rowWithCardsCategoryForPlay,
} from './generate-dom/generate-variables';
import { cleanPlayPage } from './changes-in-dom/change-play-page';
import { createEnviromentForCategories } from './helpers';

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

export { closeOnClick, flipCardOnClick };
