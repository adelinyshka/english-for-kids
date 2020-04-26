import { btnFinish } from './generate-variables';

function createBtnFinishGame() {
  const blockToInsertBtn = document.querySelector('#playPage.d-block' + ' div.d-block');

  btnFinish.classList.add('btn-danger', 'btn-end');
  btnFinish.value = 'Stop';
  btnFinish.style.maxHeight = '42px';
  btnFinish.style.maxWidth = '100px';
  btnFinish.style.padding = '5px';
  btnFinish.style.borderRadius = '8px';
  btnFinish.style.textAlign = 'center';
  btnFinish.style.cursor = 'pointer';
  btnFinish.style.position = 'absolute';
  btnFinish.style.top = '0px';
  btnFinish.style.right = '10px';
  btnFinish.addEventListener('click', function () {
    location.reload();
  });
  blockToInsertBtn.append(btnFinish);
}

export { createBtnFinishGame };
