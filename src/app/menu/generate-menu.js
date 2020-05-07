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
  titleInHeader,
} from '../generate-variables';
import {
  createStatisticsPage,
  removeStatisticsPage,
} from '../statistics/change-statistic-page';
import { cleanTrainPage } from '../trainPage/change-train-page';
import { createEnviromentForCategories } from '../helpers';
import { hideMenu } from './change-menu';
import { changeCardInTrainMode } from '../card/change-card-in-train-mode';
import {createTrainPageInsideCategory, createPlayPageInsideCategory} from "../switcher";

function createMenu() {
  firstLi.classList.add('p-1');
  firstLi.append(firstA);
  firstA.innerHTML = 'Main';
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
      titleInHeader.innerText = e.target.textContent;
      if (trainMode()) {
        if (e.target.textContent === 'Main') {
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
          createTrainPageInsideCategory(e.target.textContent);
          returnButtonGame();
          changeCardInTrainMode();
        }
      }

      if (playMode()) {
        if (e.target.textContent === 'Main') {
          removeStatisticsPage();
          createEnviromentForCategories(playPage, rowWithCardsCategoryForPlay);
          removeButtonGame();
        } else if (e.target.innerText === 'Statistics') {
          createStatisticsPage();
          removeButtonGame();
        } else {
          removeStatisticsPage();
          createPlayPageInsideCategory(e.target.textContent);
        }
      }
    });
    hideMenu();
  });
}



export { createMenu };
