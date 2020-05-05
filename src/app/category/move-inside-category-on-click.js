import { changeCardInTrainMode } from '../card/change-card-in-train-mode';
import { trainMode } from '../generate-variables';
import { createPageInsideCategory } from './generate-page-inside-category';

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

export { moveInsideCategory };
