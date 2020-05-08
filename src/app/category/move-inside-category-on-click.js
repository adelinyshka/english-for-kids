import {playMode, trainMode, main} from '../variables';
import {  createPlayCards,  createTrainCards} from './../switcher';
import {showTrainPage} from "../trainPage/change-train-page";
import {showPlayPage} from "../playPage/change-play-page";

function moveInsideCategory() {
  main.addEventListener('click', function (e) {

    let nameOfCategory = e.target.closest('.card').id;

    if (nameOfCategory) {
      if (trainMode()) {
        showTrainPage();
      } if(playMode()) {
        showPlayPage();
      }
      createPlayCards(nameOfCategory);
    }
  });
}

export { moveInsideCategory };
