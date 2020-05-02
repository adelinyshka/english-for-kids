import { header } from '../generate-dom/generate-variables';
//скрытие хедера в режите игра после нажатия на кнопку Start Game, я думала
// это поможет избежать проигрывания слов из другой категории при
// переключении режимов train/play - не помогло
function hideHeader() {
  header.classList.remove('d-flex');
  header.classList.add('d-none');
}

function showHeader() {
  header.classList.add('d-flex');
  header.classList.remove('d-none');
}

export { hideHeader, showHeader };
