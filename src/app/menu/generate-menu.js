import categoryData from '../data/category.data';
import {
  firstA,
  firstLi,
  pageMenu,
  playMode,
  playPage,
  rowWithCardsCategoryForPlay,
  rowWithCardsCategoryForTrain,
  trainMode,
  trainPage,
  btnStartGame,
} from '../generate-variables';
import {
  createStatisticsPage,
  removeStatisticsPage,
} from '../statistics/change-statistic-page';
import { cleanTrainPage } from '../trainPage/change-train-page';
import { createEnviromentForCategories } from '../helpers';
import { hideMenu } from './change-menu';
import { changeCardInTrainMode } from '../card/change-card-in-train-mode';
import { cleanPlayPage } from '../playPage/change-play-page';
import { createPageInsideCategory } from '../category/generate-page-inside-category';

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
    btnStartGame.classList.add('d-none');
  }

  function returnButtonGame() {
    btnStartGame.classList.remove('d-none');
    btnStartGame.classList.add('d-block');
  }

  const menuLinks = Array.from(pageMenu.querySelectorAll('li a'));

  menuLinks.forEach((item) => {
    item.addEventListener('click', function (e) {
      if (trainMode()) {
        if (e.target.textContent === 'Main menu') {
          removeStatisticsPage();
          cleanTrainPage();
          createEnviromentForCategories(trainPage, rowWithCardsCategoryForTrain);
        } else if (e.target.innerText === 'Statistics') {
          cleanTrainPage();
          createStatisticsPage();
          removeButtonGame();
        } else {
          removeStatisticsPage();
          cleanTrainPage();
          createPageInsideCategory(e.target.textContent, trainPage);
          returnButtonGame();
          changeCardInTrainMode();
        }
      }

      if (playMode()) {
        if (e.target.textContent === 'Main menu') {
          removeStatisticsPage();
          cleanPlayPage();
          createEnviromentForCategories(playPage, rowWithCardsCategoryForPlay);
        } else if (e.target.innerText === 'Statistics') {
          cleanPlayPage();
          createStatisticsPage();
          removeButtonGame();
        } else {
          removeStatisticsPage();
          cleanPlayPage();
          createPageInsideCategory(e.target.textContent, playPage);
          returnButtonGame();
        }
      }
    });
    hideMenu();
  });
}

export { createMenu };
