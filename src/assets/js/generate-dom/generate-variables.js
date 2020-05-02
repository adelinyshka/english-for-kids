const container = document.querySelector('#containerApp');
const trainPage = document.querySelector('#trainPage');
const playPage = document.querySelector('#playPage');
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
const rowForAnswers = document.createElement('div');
const col12 = document.createElement('div');
const btnFinish = document.createElement('input');
const audioYes = document.querySelector('#yes');
const audioNo = document.querySelector('#no');
const finalPage = document.querySelector('.final-page');
const finalTitle = document.querySelector('.final-page h1');
const finalResultText = document.createElement('div');
const close = document.querySelector('.final-page span');
const header = document.querySelector('header');
const statisticsPage = document.querySelector('#statistics');
const title = document.querySelector('h3');
const btnStartGame = document.createElement('button');
btnStartGame.innerHTML = 'Start Game';
btnStartGame.style.width = '200px';
btnStartGame.classList.add('btn', 'btn-play');

const trainMode = () => {
  return checker.checked;
};

const playMode = () => {
  return !checker.checked;
};

export {
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
  close,
  header,
  statisticsPage,
  title,
};
