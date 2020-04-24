import cards from './wordsData';
import categoryData from './categoryData';
import CardComponent from './card.component';
import { makeBlur, ask } from './preloader';

window.addEventListener('load', function () {
  initFunctions();
});

function initFunctions() {
  makeBlur();
  ask();
  changeLayoutByClickCheckbox();
  createMenu();
  toggleMenu();
}

const container = document.querySelector('#containerApp');
const trainPage = document.querySelector('#trainPage');
const playPage = document.querySelector('#playPage');
const checker = document.querySelector('#switcher');
const rowWithCardsCategoryForTrain = document.querySelector('#rowWithCardsCategoryForTrain');
const rowWithCardsCategoryForPlay = document.querySelector('#rowWithCardsCategoryForPlay');

//====== создание гамбургера меню

const pageMenu = document.querySelector('ul.page-menu');
const firstLi = document.createElement('li');
const firstA = document.createElement('a');
firstLi.classList.add('p-1');
firstLi.append(firstA);
firstA.innerHTML = 'Main menu';
pageMenu.append(firstLi);

//генерация списка меню
function changeMenuBg(colorClass) {
  if (checker.checked) {
    pageMenu.classList.add(colorClass);
  }
  if (!checker.checked) {
    pageMenu.classList.remove(colorClass);
  }
}

function createMenu() {
  categoryData.forEach((item) => {
    const menuList = document.createElement('li');
    menuList.classList.add('p-1');
    const menuListLink = document.createElement('a');
    menuList.append(menuListLink);
    menuListLink.innerText = item.word;
    pageMenu.append(menuList);
  });

  const menuLinks = Array.from(pageMenu.querySelectorAll('li a'));

  menuLinks.forEach((item) => {
    item.addEventListener('click', function (e) {
      if (checker.checked) {
        if (e.target.textContent === 'Main menu') {
          cleanTrainPage();
          createEnviromentForCategories(trainPage, rowWithCardsCategoryForTrain);
          hideMenu();
        } else {
          cleanTrainPage();
          createPageInsideCategory(e.target.textContent, trainPage);
          turnOrAudioOnClick();
          hideMenu();
        }
      }

      if (!checker.checked) {
        if (e.target.textContent === 'Main menu') {
          cleanPlayPage();
          createEnviromentForCategories(playPage, rowWithCardsCategoryForPlay);
          hideMenu();
        } else {
          cleanPlayPage();
          createPageInsideCategory(e.target.textContent, playPage);
          hideMenu();
        }
      }
    });
  });

  trainPage.addEventListener('load', function () {
    console.log('ddd');
  });
}

function hideMenu() {
  pageMenu.classList.add('d-none');
}

function cleanTrainPage() {
  trainPage.innerHTML = '';
}

function cleanPlayPage() {
  playPage.innerHTML = '';
}

function createEnviromentForCategories(what, whereToAdd) {
  const containerFluid = document.createElement('div');
  containerFluid.classList.add('container-fluid');
  what.append(containerFluid);
  whereToAdd.classList.remove('d-none');
  containerFluid.append(whereToAdd);
}

function toggleMenu() {
  const hamburgerIcon = document.querySelector('.hamburger');

  container.addEventListener('click', function (e) {
    if (e.target === hamburgerIcon) {
      pageMenu.classList.toggle('d-none');
    } else {
      pageMenu.classList.add('d-none');
    }
  });
}

function showTrainPage() {
  playPage.classList.remove('d-block');
  playPage.classList.add('d-none');
  trainPage.classList.remove('d-none');
  trainPage.classList.add('d-block');
}

function showPlayPage() {
  trainPage.classList.remove('d-block');
  trainPage.classList.add('d-none');
  playPage.classList.remove('d-none');
  playPage.classList.add('d-block');
}

//====== отрисовка экрана в зависимости от положения свитчера

window.addEventListener('load', function () {
  if (checker.checked) {
    changeMenuBg('trainColor');
    creatCategoryForTrain();
    showTrainPage();
  } else {
    changeMenuBg('playColor');
    creatCategoryForPlay();
    showPlayPage();
  }
});

//====== смена режима тренировка/игра по клику на свитчер

function changeLayoutByClickCheckbox() {
  document.addEventListener('change', function () {
    if (checker.checked) {
      if (rowWithCardsCategoryForTrain.innerHTML === '') {
        changeMenuBg('trainColor');
        creatCategoryForTrain();
        showTrainPage();
      } else {
        changeMenuBg('trainColor');
        showTrainPage();
      }
    }
    if (!checker.checked) {
      if (rowWithCardsCategoryForPlay.innerHTML === '') {
        changeMenuBg('playColor');
        creatCategoryForPlay();
        showPlayPage();
      } else {
        changeMenuBg('playColor');
        showPlayPage();
      }
    }
  });
}

//====== создание страницы с категориями

function createCategories(arr, where, bgColor, color) {
  arr.forEach((card) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add(
      'col-sm-6',
      'col-md-4',
      'col-lg-3',
      'col-12',
      'justify-content-center',
      'd-flex',
    );
    cardElement.innerHTML =
      `<div class="card category-card" 
        style="background:${bgColor};
        width: 13rem; height: 200px;margin:10px;border:4px solid white;
        border-radius: 8px; color:${color}" 
        id=${card.word}>` +
      `<div class="card-face"><img class="card-img-top"` +
      ` src="${card.pic}" alt="..." style="width:70%;"` +
      `        <div class="card-body">` +
      `           <h5 class="card-title front">${card.word}</h5>` +
      `        </div>` +
      `    </div>` +
      `</div>`;

    where.append(cardElement);
  });
}

//====== смена цвета в зависимости от режима приложения

function creatCategoryForTrain() {
  createCategories(
    categoryData,
    rowWithCardsCategoryForTrain,
    ' linear-gradient(60deg, #64b3f4 0%, #c2e59c 100%);',
    'black',
  );
}

function creatCategoryForPlay() {
  createCategories(
    categoryData,
    rowWithCardsCategoryForPlay,
    'linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);',
    'white',
  );
}

//====== переключение режима ВНУТРИ категории

function moveInsideCategory(fromWhere, toWhere) {
  fromWhere.addEventListener('click', function (e) {
    if (e.target.closest('.card')) {
      if (checker.checked) {
        fromWhere.classList.add('d-none');

        createPageInsideCategory(e.target.closest('.card').id, toWhere);
        turnOrAudioOnClick();
      } else {
        fromWhere.classList.add('d-none');
        createPageInsideCategory(e.target.closest('.card').id, toWhere);
      }
    }
  });
}

moveInsideCategory(rowWithCardsCategoryForTrain, trainPage);
moveInsideCategory(rowWithCardsCategoryForPlay, playPage);

function turnOrAudioOnClick() {
  const cardsClicked = Array.from(document.querySelectorAll('.scene'));

  cardsClicked.forEach((element) => {
    const btnInCard = element.querySelector('a.btn-turn');
    const cardFace = element.querySelector('.card');
    const audio = element.querySelector('audio');

    element.addEventListener('click', function (e) {
      e.preventDefault();
      if (e.target === btnInCard) {
        cardFace.classList.add('is-flipped');
      } else audio.play();
    });

    cardFace.addEventListener('mouseleave', function (e) {
      if (e.target.classList.contains('is-flipped')) {
        cardFace.classList.remove('is-flipped');
      }
    });
  });
}

const containerItem = document.querySelectorAll('.scene .card');

containerItem.forEach((a) => a.addEventListener('click', flipCard));

//====== создание страницы  внутри категории

const btnPlay = document.createElement('button');
btnPlay.innerHTML = 'Start Game';
btnPlay.style.width = '200px';
btnPlay.classList.add('btn', 'btn-play');

//====== ряд для звезд

let rowForAnswers = document.createElement('div');
rowForAnswers.classList.add('row');
let col12 = document.createElement('div');
col12.classList.add('col-12', 'row-star');
rowForAnswers.append(col12);
col12.innerHTML = '';

function createSunIcon() {
  col12.innerHTML += `
  <div class = 'star m-1 text-warning fas fa-sun fa-3x'></div>
  `;
}

function createCloudIcon() {
  col12.innerHTML += `
  <div class = 'star m-1 text-secondary fas fa-cloud fa-3x'></div>
  `;
}

function cleanAnswerRow() {
  col12.innerHTML = '';
}

function createPageInsideCategory(divCardId, whereToPut) {
  const cardBlock = document.createElement('div');
  const row = document.createElement('div');
  const secondRow = document.createElement('div');
  const title = document.createElement('h3');
  let linkMenu = Array.from(document.querySelectorAll('#containerApp header' + ' nav ul li a'));

  title.classList.add('text-center');
  title.style.letterSpacing = '2px';
  title.style.fontWeight = 'bold';
  title.innerText = divCardId;
  cardBlock.classList.add('d-block');
  cardBlock.append(title);
  row.classList.add('row');
  secondRow.classList.add('col-12', 'd-flex', 'justify-content-center');

  linkMenu.forEach((item) => {
    if (item.innerText === title.innerText) {
      item.style.color = 'black';
      item.style.fontWeight = 'bold';
    }

    if (item.innerText !== title.innerText) {
      item.style.color = 'white';
      item.style.fontWeight = 'normal';
    }
  });

  if (checker.checked) {
    row.id = `inside${divCardId}Train`;
    title.style.color = '#009efd';

    if (divCardId === 'Animals') {
      let card = new CardComponent();
      card.iterateArrCard(cards, 0, row, 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);');
    }

    if (divCardId === 'Dishes') {
      let card = new CardComponent();
      card.iterateArrCard(cards, 1, row, 'linear-gradient(to top, #fff1eb' + ' 0%, #ace0f9 100%);');
    }

    if (divCardId === 'Fruits') {
      let card = new CardComponent();
      card.iterateArrCard(cards, 2, row, 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);');
    }

    if (divCardId === 'House') {
      let card = new CardComponent();
      card.iterateArrCard(cards, 3, row, 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);');
    }
    if (divCardId === 'Nature') {
      let card = new CardComponent();
      card.iterateArrCard(cards, 4, row, 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);');
    }
    if (divCardId === 'Clothes') {
      let card = new CardComponent();
      card.iterateArrCard(cards, 5, row, 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);');
    }

    if (divCardId === 'Toys') {
      let card = new CardComponent();
      card.iterateArrCard(cards, 6, row, 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);');
    }

    if (divCardId === 'Vegetables') {
      let card = new CardComponent();
      card.iterateArrCard(cards, 7, row, 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);');
    }
  }

  if (!checker.checked) {
    row.id = `inside${divCardId}Play`;
    title.style.color = '#7873f5';

    if (divCardId === 'Animals') {
      let card = new CardComponent();
      card.iterateArrCardPlay(cards, 0, row, 'linear-gradient(to top, #feada6 0%, #f5efef 100%);');
    }

    if (divCardId === 'Dishes') {
      let card = new CardComponent();
      card.iterateArrCardPlay(cards, 1, row, 'linear-gradient(to top, #feada6 0%, #f5efef 100%);');
    }
    if (divCardId === 'Fruits') {
      let card = new CardComponent();
      card.iterateArrCardPlay(cards, 2, row, 'linear-gradient(to top, #feada6 0%, #f5efef 100%);');
    }

    if (divCardId === 'House') {
      let card = new CardComponent();
      card.iterateArrCardPlay(cards, 3, row, 'linear-gradient(to top, #feada6 0%, #f5efef 100%);');
    }
    if (divCardId === 'Nature') {
      let card = new CardComponent();
      card.iterateArrCardPlay(cards, 4, row, 'linear-gradient(to top, #feada6 0%, #f5efef 100%);');
    }
    if (divCardId === 'Clothes') {
      let card = new CardComponent();
      card.iterateArrCardPlay(cards, 5, row, 'linear-gradient(to top, #feada6 0%, #f5efef 100%);');
    }

    if (divCardId === 'Toys') {
      let card = new CardComponent();
      card.iterateArrCardPlay(cards, 6, row, 'linear-gradient(to top, #feada6 0%, #f5efef 100%);');
    }

    if (divCardId === 'Vegetables') {
      let card = new CardComponent();
      card.iterateArrCardPlay(cards, 7, row, 'linear-gradient(to top, #feada6 0%, #f5efef 100%);');
    }

    row.append(secondRow);
    title.after(rowForAnswers);
    secondRow.append(btnPlay);
  }

  cardBlock.append(row);
  whereToPut.append(cardBlock);
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

//возврат значения из id audio
function returnIdFromAudio(word) {
  return word.slice(8);
}

const audioYes = playPage.querySelector('#yes');
const audioNo = playPage.querySelector('#no');

function playYes() {
  audioYes.play();
}

function playNo() {
  audioNo.play();
}

let starYes = 0;
let starNo = 0;
let finalPage = document.querySelector('.final-page');
let finalTitle = document.querySelector('.final-page h1');
let finalResultText = document.createElement('div');
finalResultText.classList.add('d-flex', 'align-items-center', 'flex-column', 'text-secondary');

const close = document.querySelector('.final-page span');

close.addEventListener('click', function () {
  finalPage.classList.add('d-none');
  cleanPlayPage();
  createEnviromentForCategories(playPage, rowWithCardsCategoryForPlay);
});

function initGame() {
  btnPlay.addEventListener('click', function (e) {
    const containerCards = Array.from(document.querySelectorAll('.scene' + ' .card audio'));

    if (btnPlay.innerText === 'Start Game') {
      function playOnce() {
        containerCards[containerCards.length - 1].play();
      }

      function deleteOne() {
        containerCards.pop();
      }

      function giveResult() {
        finalPage.classList.remove('d-none');
        finalResultText.innerHTML = 'Верных ответов: ' + starYes + '.  Ошибок: ' + starNo + '.';
        let finalImg = document.createElement('div');

        if (starNo === 0) {
          document.querySelector('#goodEnd').play();
          finalImg.classList.add('final-img', 'goodResult');
        } else {
          document.querySelector('#badEnd').play();
          finalImg.classList.add('final-img', 'badResult');
        }
        finalResultText.append(finalImg);
        finalTitle.append(finalResultText);
      }

      //кнопка повтора
      let iconReload = document.createElement('i');
      iconReload.classList.add('text-light', 'fas', 'fa-redo-alt', 'f-2x');
      btnPlay.innerHTML = '';
      btnPlay.classList.add('round-btn');
      btnPlay.append(iconReload);

      shuffle(containerCards);
      playOnce();

      playPage.addEventListener('click', function (e) {
        let audioId = returnIdFromAudio(containerCards[containerCards.length - 1].id);

        if (e.target.closest('.btn-play') === btnPlay) {
          playOnce();
        }

        if (e.target.alt == null) {
          return;
        }

        if (audioId === e.target.alt) {
          deleteOne();
          createSunIcon();
          setTimeout(function () {
            playYes();
          }, 100);
          starYes++;

          setTimeout(function () {
            e.target.style.opacity = '0.5';
          }, 300);

          if (containerCards.length === 0) {
            setTimeout(function () {
              cleanAnswerRow();
              giveResult();
            }, 1000);
            btnPlay.innerHTML = 'Start Game';
            btnPlay.classList.remove('round-btn');

            setTimeout(function () {
              starYes = 0;
              starNo = 0;
            }, 10000);
          } else {
            setTimeout(playOnce, 600);
          }
        } else if (audioId !== e.target.alt && e.target.style.opacity === '0.5') {
          return;
        } else if (audioId !== e.target.alt && e.target.closest('.btn-play') !== btnPlay) {
          createCloudIcon();
          playNo();
          starNo++;
        }
      });
    }
  });
}

initGame();
