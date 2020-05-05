import { playPage, trainPage } from '../generate-variables';

function cleanTrainPage() {
  trainPage.innerHTML = '';
}
function showTrainPage() {
  playPage.classList.remove('d-block');
  playPage.classList.add('d-none');
  trainPage.classList.remove('d-none');
  trainPage.classList.add('d-block');
}

export { cleanTrainPage, showTrainPage };
