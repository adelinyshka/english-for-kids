import cards from './wordsData';
import categoryData from './categoryData';
import Card from './Card';
import { makeBlur, ask } from './preloader';

// todo при определенных действиях 2 раза подгружаютс] категории

window.addEventListener('load', function () {
  initFunctions();
});

function initFunctions() {
  // makeBlur();
  // ask();
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
  console.log(menuLinks);

  //пееходы по кликам
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
        }
      }
    });
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
    changeMenuBg('trainColor');
    creatCategoryForPlay();
    showPlayPage();
  }
});

//====== смена режима тренировка/игра по клику на свитчер

function changeLayoutByClickCheckbox() {
  document.addEventListener('change', function () {
    if (checker.checked) {
      // creatCategoryForTrain();
      changeMenuBg('trainColor');
      creatCategoryForTrain();
      showTrainPage();
    }
    if (!checker.checked) {
      changeMenuBg('trainColor');

      // creatCategoryForPlay();
      creatCategoryForPlay();
      showPlayPage();
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
      ` src="${card.pic}" alt="..." style="width:40%;"` +
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

function createPageInsideCategory(divCardId, whereToPut) {
  const cardBlock = document.createElement('div');
  const row = document.createElement('div');
  const secondRow = document.createElement('div');
  const title = document.createElement('h3');
  const btnPlay = document.createElement('button');

  btnPlay.innerHTML = 'Start Game';
  btnPlay.style.width = '200px';
  btnPlay.classList.add('btn', 'btn-play');

  title.classList.add('text-center');
  title.style.letterSpacing = '2px';
  title.innerText = divCardId;
  cardBlock.classList.add('d-block');
  cardBlock.append(title);
  row.classList.add('row');
  secondRow.classList.add('col-12', 'd-flex', 'justify-content-center');

  if (checker.checked === true) {
    row.id = `inside${divCardId}Train`;

    //не получилось по-другому пока, только так 8-|
    if (divCardId === 'Animals') {
      let card = new Card();
      card.iterateArrCard(cards, 0, row, 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);');
    }

    if (divCardId === 'Dishes') {
      let card = new Card();
      card.iterateArrCard(cards, 1, row, 'linear-gradient(to top, #fff1eb' + ' 0%, #ace0f9 100%);');
    }

    if (divCardId === 'Fruits') {
      let card = new Card();
      card.iterateArrCard(cards, 2, row, 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);');
    }

    if (divCardId === 'House') {
      let card = new Card();
      card.iterateArrCard(cards, 3, row, 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);');
    }
    if (divCardId === 'Nature') {
      let card = new Card();
      card.iterateArrCard(cards, 4, row, 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);');
    }
    if (divCardId === 'Tales') {
      let card = new Card();
      card.iterateArrCard(cards, 5, row, 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);');
    }

    if (divCardId === 'Toys') {
      let card = new Card();
      card.iterateArrCard(cards, 6, row, 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);');
    }

    if (divCardId === 'Vegetables') {
      let card = new Card();
      card.iterateArrCard(cards, 7, row, 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);');
    }
  }

  if (checker.checked !== true) {
    row.id = `inside${divCardId}Play`;
    if (divCardId === 'Animals') {
      let card = new Card();
      card.iterateArrCardPlay(cards, 0, row, 'linear-gradient(to top, #feada6 0%, #f5efef 100%);');
    }

    if (divCardId === 'Dishes') {
      let card = new Card();
      card.iterateArrCardPlay(cards, 1, row, 'linear-gradient(to top, #feada6 0%, #f5efef 100%);');
    }
    if (divCardId === 'Fruits') {
      let card = new Card();
      card.iterateArrCardPlay(cards, 2, row, 'linear-gradient(to top, #feada6 0%, #f5efef 100%);');
    }

    if (divCardId === 'House') {
      let card = new Card();
      card.iterateArrCardPlay(cards, 3, row, 'linear-gradient(to top, #feada6 0%, #f5efef 100%);');
    }
    if (divCardId === 'Nature') {
      let card = new Card();
      card.iterateArrCardPlay(cards, 4, row, 'linear-gradient(to top, #feada6 0%, #f5efef 100%);');
    }
    if (divCardId === 'Tales') {
      let card = new Card();
      card.iterateArrCardPlay(cards, 5, row, 'linear-gradient(to top, #feada6 0%, #f5efef 100%);');
    }

    if (divCardId === 'Toys') {
      let card = new Card();
      card.iterateArrCardPlay(cards, 6, row, 'linear-gradient(to top, #feada6 0%, #f5efef 100%);');
    }

    if (divCardId === 'Vegetables') {
      let card = new Card();
      card.iterateArrCardPlay(cards, 7, row, 'linear-gradient(to top, #feada6 0%, #f5efef 100%);');
    }
    row.append(secondRow);
    secondRow.append(btnPlay);
  }

  cardBlock.append(row);
  whereToPut.append(cardBlock);
}

// function moveInsideCategoryByClick() {
//   fromWhere.addEventListener('click', function (e) {
//     let divCard = e.target.closest('.card');
//
//     if (e.target.closest('.card') === divCard) {
//       fromWhere.classList.add('d-none');
//
//       createPageInsideCategory(divCard.id, toWhere);
//       turnOrAudioOnClick();
//     }
//   });
// }
