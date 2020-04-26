import { playPage, trainPage } from '../generate-dom/generate-variables';

function cleanPlayPage() {
  playPage.innerHTML = '';
}

function showPlayPage() {
  trainPage.classList.remove('d-block');
  trainPage.classList.add('d-none');
  playPage.classList.remove('d-none');
  playPage.classList.add('d-block');
}

export { cleanPlayPage, showPlayPage };
