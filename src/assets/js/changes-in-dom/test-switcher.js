import {
  trainMode,
  playMode,
  rowWithCardsCategoryForPlay,
  rowWithCardsCategoryForTrain,
  title,
  header,
  checker,
} from '../generate-dom/generate-variables';
import { removeStatisticsPage } from '../changes-in-dom/change-statistic-page';
import { changeMenuBg } from '../changes-in-dom/change-menu';
import { showTrainPage } from '../changes-in-dom/change-train-page';
import { showPlayPage } from '../changes-in-dom/change-play-page';
import { creatCategoryForPlay, creatCategoryForTrain } from '../generate-dom/generate-categories';
import { createPageInsideCategory } from '../generate-dom/generate-page-inside-category';
import { changeCardInTrainMode } from './change-card-in-train-mode';
import CardComponent from '../card.component';
import cards from '../data/cards.data';


function changeLayoutByClickCheckbox() {
  checker.addEventListener('change', function () {
    if (trainMode()) {
      if (rowWithCardsCategoryForTrain.innerHTML === '') {
        removeStatisticsPage();
        changeMenuBg('trainColor');
        creatCategoryForTrain();
        showTrainPage();
      } else {
        // removeStatisticsPage();
        // changeMenuBg('trainColor');
        getNeededRowIdTrain();
        if (getNeededRowIdTrain() === 'Animals') {
          let card = new CardComponent();
          card.iterateArrCard(
            cards,
            0,
            rowWithCardsCategoryForTrain,
            'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);',
          );

          checker.addEventListener('click', function () {

            let card = new CardComponent();
            card.iterateArrCardPlay(
              cards,
              0,
              rowWithCardsCategoryForPlay,
              'linear-gradient(to top, #feada6 0%, #f5efef 100%);',
            );
          });
        }
      }
      // showTrainPage();
      console.log('im page inside Train');
    }

    if (playMode()) {
      if (rowWithCardsCategoryForPlay.innerHTML === '') {
        removeStatisticsPage();
        changeMenuBg('playColor');
        creatCategoryForPlay();
        showPlayPage();
        console.log('hop')
      } else {
        removeStatisticsPage();
        changeMenuBg('playColor');
        getNeededRowIdPlay();
        if (getNeededRowIdPlay() === 'Animals') {
          let card = new CardComponent();
          card.iterateArrCardPlay(
            cards,
            0,
            rowWithCardsCategoryForPlay,
            'linear-gradient(to top, #feada6 0%, #f5efef 100%);',
          );
          checker.addEventListener('click', function () {
            let card = new CardComponent();
            card.iterateArrCard(
              cards,
              0,
              rowWithCardsCategoryForTrain,
              'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);',
            );
          })
        }

        showPlayPage();
        console.log('im page inside Play');
      }
    }
  });
}

export { changeLayoutByClickCheckbox };
