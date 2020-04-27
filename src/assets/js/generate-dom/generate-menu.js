import categoryData from '../data/category.data';
import {
  btnPlay,
  firstA,
  firstLi,
  pageMenu,
  playMode,
  playPage,
  rowWithCardsCategoryForPlay,
  rowWithCardsCategoryForTrain,
  trainMode,
  trainPage,
} from './generate-variables';
import {
  createStatisticsPage,
  removeStatisticsPage,
} from '../changes-in-dom/change-statistic-page';
import { cleanTrainPage } from '../changes-in-dom/change-train-page';
import { createEnviromentForCategories } from '../helpers';
import { hideMenu } from '../changes-in-dom/change-menu';
import { changeCardInTrainMode } from '../changes-in-dom/change-card-in-train-mode';
import { cleanPlayPage } from '../changes-in-dom/change-play-page';
import { createPageInsideCategory } from './generate-page-inside-category';

function createMenu() {
  firstLi.classList.add('p-1');
  firstLi.append(firstA);
  firstA.innerHTML = 'Main menu';
  pageMenu.append(firstLi);

  categoryData.forEach((item) => {
    const menuList = document.createElement('li');
    menuList.classList.add('p-1');
    const menuListLink = document.createElement('a');
    menuList.append(menuListLink);
    menuListLink.innerText = item.word;
    pageMenu.append(menuList);
  });

  const menuListStat = document.createElement('li');
  menuListStat.classList.add('p-1');
  const menuListLinkStat = document.createElement('a');
  menuListLinkStat.innerText = 'Statistics';
  menuListLinkStat.id = 'statistics-menu-link';
  menuListStat.append(menuListLinkStat);
  pageMenu.append(menuListStat);

  function removeButtonGame() {
    btnPlay.classList.add('d-none');
  }

  function returnButtonGame() {
    btnPlay.classList.remove('d-none');
    btnPlay.classList.add('d-block');
  }

  const menuLinks = Array.from(pageMenu.querySelectorAll('li a'));

  menuLinks.forEach((item) => {
    item.addEventListener('click', function (e) {
      if (trainMode()) {
        if (e.target.textContent === 'Main menu') {
          removeStatisticsPage();
          cleanTrainPage();
          createEnviromentForCategories(trainPage, rowWithCardsCategoryForTrain);
          hideMenu();
        } else if (e.target.innerText === 'Statistics') {
          cleanTrainPage();
          createStatisticsPage();
          removeButtonGame();
          hideMenu();
        } else {
          removeStatisticsPage();
          cleanTrainPage();
          createPageInsideCategory(e.target.textContent, trainPage);
          returnButtonGame();
          changeCardInTrainMode();
          hideMenu();
        }
      }

      if (playMode()) {
        if (e.target.textContent === 'Main menu') {
          removeStatisticsPage();
          cleanPlayPage();
          createEnviromentForCategories(playPage, rowWithCardsCategoryForPlay);
          hideMenu();
        } else if (e.target.innerText === 'Statistics') {
          cleanPlayPage();
          createStatisticsPage();
          removeButtonGame();
          hideMenu();
        } else {
          removeStatisticsPage();
          cleanPlayPage();
          createPageInsideCategory(e.target.textContent, playPage);
          returnButtonGame();
          hideMenu();
        }
      }
    });
  });
}

export { createMenu };
