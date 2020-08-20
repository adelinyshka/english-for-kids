import { btnFinish } from '../variables';

function createBtnFinishGame() {
  const blockToInsertBtn = document.querySelector('#playPage.d-block div.row');

  btnFinish.classList.add('btn-danger', 'btn-end');
  btnFinish.value = 'Stop';
  btnFinish.addEventListener('click', function () {
    location.reload();
  });
  blockToInsertBtn.append(btnFinish);
}

export { createBtnFinishGame };
