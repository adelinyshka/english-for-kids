import { changeCardInTrainMode } from '../card/change-card-in-train-mode';
import {playMode, trainMode} from '../variables';
import { createPageInsideCategory } from './create-page-inside-category';
import { changeLayoutByClickCheckbox, createPlayCards,  createTrainCards} from '../card/create-card';
import {showTrainPage} from "../trainPage/change-train-page";
import {showPlayPage} from "../playPage/change-play-page";


function moveInsideCategory(fromWhere, toWhere) {
  fromWhere.addEventListener('click', function (e) {
    if (e.target.closest('.card')) {
      if (trainMode()) {
        fromWhere.classList.add('d-none');

        createPageInsideCategory(e.target.closest('.card').id, toWhere);
        changeCardInTrainMode();
      } else {
        fromWhere.classList.add('d-none');
        createPageInsideCategory(e.target.closest('.card').id, toWhere);
      }
    }
  });
}
//
// const main = document.querySelector('main');
//
// function moveInsideCategory() {
//   main.addEventListener('click', function (e) {
//     let nameOfCategory = e.target.closest('.card').id;
//     if (nameOfCategory) {
//       if (trainMode()) {
//         showTrainPage();
//         // fromWhere.classList.add('d-none');
//         createTrainCards(nameOfCategory);
//       } if(playMode()) {
//         showPlayPage();
//         // fromWhere.classList.add('d-none');
//         createPlayCards(nameOfCategory);
//       }
//     }
//   });
// }



export { moveInsideCategory };
