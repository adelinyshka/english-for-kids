const container = document.querySelector('#containerApp');
const trainPage = document.querySelector('#trainPage');
const playPage = document.querySelector('#playPage');
const main = document.querySelector('main');
const checker = document.querySelector('#switcher');
const rowWithCardsCategoryForTrain = document.querySelector('#rowWithCardsCategoryForTrain');
const rowWithCardsCategoryForPlay = document.querySelector('#rowWithCardsCategoryForPlay');
const pageMenu = document.querySelector('ul.page-menu');
const firstLi = document.createElement('li');
const firstA = document.createElement('a');
const menuListStat = document.createElement('li');
const menuListLinkStat = document.createElement('a');
const menuLinks = Array.from(pageMenu.querySelectorAll('li a'));
const containerItem = document.querySelectorAll('.scene .card');
const hamburger = document.querySelector('.hamburger');

const btnFinish = document.createElement('input');
const audioYes = document.querySelector('#yes');
const audioNo = document.querySelector('#no');
const finalPage = document.querySelector('.final-page');
const finalTitle = document.querySelector('.final-page h1');
const finalResultText = document.createElement('div');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const statisticsPage = document.querySelector('#statistics');
const resetBtn = statisticsPage.querySelector('.btn-reset');
const titleInHeader = document.querySelector('header h3');

const rowForAnswers = document.createElement('div');
rowForAnswers.classList.add('row','row-with-answers');

const col12 = document.createElement('div');
col12.classList.add('col-12', 'row-star');
rowForAnswers.append(col12);
col12.innerHTML = '';

const rowForButtonStartGame = document.createElement('div');
rowForButtonStartGame.classList.add('col-12', 'd-flex', 'justify-content-center','row-button-start-game');
const btnStartGame = document.createElement('button');

btnStartGame.innerHTML = 'Start Game';
btnStartGame.style.width = '200px';
btnStartGame.classList.add('btn', 'btn-play');
rowForButtonStartGame.append(btnStartGame);

const rowWithPlayCards = document.createElement('div');
rowWithPlayCards.classList.add('row','row-with-play-cards','justify-content-center');

const rowWithTrainCards = document.createElement('div');
rowWithTrainCards.classList.add('row','row-with-train-cards','justify-content-center');
const bgColorTrain = 'linear-gradient(to top, #fff1eb' + ' 0%, #ace0f9 100%);';
const iconReload = document.createElement('i');
iconReload.classList.add('text-light', 'fas', 'fa-redo-alt', 'f-2x');

const trainMode = () => {
  return checker.checked;
};

const playMode = () => {
  return !checker.checked;
};

export {
  iconReload,
  main,
  hamburger,
  rowWithTrainCards,
  bgColorTrain,
  rowWithPlayCards,
  rowForButtonStartGame,
  footer,
  trainMode,
  playMode,
  btnStartGame,
  container,
  trainPage,
  playPage,
  checker,
  rowWithCardsCategoryForTrain,
  rowWithCardsCategoryForPlay,
  pageMenu,
  firstLi,
  firstA,
  menuListStat,
  menuListLinkStat,
  menuLinks,
  containerItem,
  rowForAnswers,
  col12,
  btnFinish,
  audioYes,
  audioNo,
  finalPage,
  finalTitle,
  finalResultText,
  header,
  statisticsPage,
  resetBtn,
  titleInHeader,
};
