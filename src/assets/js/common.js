import cards from './wordsData';
import categoryData from './categoryData';
import Card from './Card';

window.addEventListener('load', function () {
  initFunctions();
});

function initFunctions() {
  alerting(
    'Прошу вас проверить работу не раньше' +
      ' субботы 25 апреля, пожалуйста,' +
      ' пока что не все успела сделать. Спасибо! Если' +
      ' можете, то оставьте свои контакты, пожалуйста.',
  );
  changeLayoutByClickCheckbox();
  createMenu();
  toggleMenu();
}

function alerting(text) {
  // alert(text);
}

const container = document.querySelector('#containerApp');
const trainPage = document.querySelector('#trainPage');
const playPage = document.querySelector('#playPage');
const checker = document.querySelector('#switcher');
const rowWithCardsCategoryForTrain = document.querySelector('#rowWithCardsCategoryForTrain');
const rowWithCardsCategoryForPlay = document.querySelector('#rowWithCardsCategoryForPlay');
const animalCategory = document.querySelector('#insideCategoryAnimals');
const rowWithAllCards = document.querySelector('.special-row');

//====== создание гамбургера меню

const pageMenu = document.querySelector('ul.page-menu');
const firstLi = document.createElement('li');
const firstA = document.createElement('a');
firstLi.append(firstA);
firstA.innerHTML = 'Main menu';
pageMenu.append(firstLi);

//генерация списка меню
function createMenu() {
  categoryData.forEach((item) => {
    const menuList = document.createElement('li');
    menuList.classList.add('p-1');
    const menuListLink = document.createElement('a');
    menuList.append(menuListLink);
    menuListLink.innerText = item.word;
    pageMenu.append(menuList);
  });
}

function toggleMenu() {
  const hamburgerIcon = document.querySelector('.hamburger');

  container.addEventListener('click', function (e) {
    if (e.target === hamburgerIcon) {
      pageMenu.classList.toggle('d-none');
      console.log('yyyy');
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
    showTrainPage();
  } else {
    showPlayPage();
  }
});

//====== смена режима тренировка/игра по клику на свитчер

function changeLayoutByClickCheckbox() {
  document.addEventListener('change', function () {
    //train
    if (checker.checked) {
      showTrainPage();
    }
    //play
    if (!checker.checked) {
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
        width: 13rem; height: 200px;margin:10px;border:8px solid white;
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

createCategories(
  categoryData,
  rowWithCardsCategoryForTrain,
  ' linear-gradient(60deg, #64b3f4 0%, #c2e59c 100%);',
  'black',
);
createCategories(
  categoryData,
  rowWithCardsCategoryForPlay,
  'linear-gradient(to top, #4fb576 0%, #44c489 30%, #28a9ae 46%, #28a2b7' +
    ' 59%, #4c7788 71%, #6c4f63 86%, #432c39 100%);',
  'white',
);

//====== переключение режима ВНУТРИ категории
// todo ошибка внутри функции - все исчезает по клику вне карточки!

function moveInsideCategory(fromWhere, toWhere) {
  fromWhere.addEventListener('click', function (e) {
    let divCard = e.target.closest('.card');
    console.log(divCard);
    if (e.target.closest('.card') === divCard) {
      fromWhere.classList.add('d-none');
      createPageInsideCategory(divCard.id, toWhere);
    }
  });
}

moveInsideCategory(rowWithCardsCategoryForTrain, trainPage);
moveInsideCategory(rowWithCardsCategoryForPlay, playPage);

//поворот карточки(не работает для нескольких)
// todo сделать поворот карточки

//поворот карточки(не работает для нескольких)
// todo сделать поворот карточки

const cardClicked = document.querySelector('.card');

rowWithAllCards.addEventListener('click', function (e) {
  let btn = e.target.closest('a.btn-turn');

  if (e.target === btn) {
    cardClicked.classList.add('is-flipped');
  }
  // else audio.play();
});

cardClicked.addEventListener('mouseleave', function (e) {
  if (e.target.classList.contains('is-flipped')) {
    cardClicked.classList.remove('is-flipped');
  }
});

const containerItem = document.querySelectorAll('.scene .card');
// console.log(containerItem);
const rotate = document.querySelectorAll('a.btn-turn');

containerItem.forEach((a) => a.addEventListener('click', flipCard));

function flipCard(a) {
  console.log(rotate(a));
  // rotate[+a.target];
  console.log(a.target);
}

// let btn = document.querySelectorAll('a.btn-turn');
// btn.forEach((a) => a.addEventListener('click',  turnCard))
// function turnCard(a) {
//   a.target.closest(cardClicked).classList.add('is-flipped');
// }

// let containerItem = document.querySelectorAll('.container__item');
// let rotate = document.querySelectorAll('.rotate');

// rotate.forEach((a) => a.addEventListener('click', flipCard));
//
// function flipCard(a) {
//   cardClicked[+a.target].classList.add('is-flipped');
// }

// cardClicked.addEventListener('mouseleave', function (e) {
//   if (e.target.classList.contains('is-flipped')) {
//     cardClicked.classList.remove('is-flipped');
//   }
// });

//====== создание страницы  внутри категории

function createPageInsideCategory(divCardId, whereToPut) {
  const cardBlock = document.createElement('div');
  const row = document.createElement('div');
  const title = document.createElement('h3');

  title.innerText = divCardId;
  cardBlock.classList.add('d-block');
  cardBlock.append(title);
  row.classList.add('row');

  if (checker.checked === true) {
    row.id = `inside${divCardId}Train`;

    //не получилось по-другому пока, только так 8-|
    if (divCardId === 'Animals') {
      let card = new Card();
      card.iterateArrCard(cards, 0, row, 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);');
    }

    if (divCardId === 'Dishes') {
      let card = new Card();
      card.iterateArrCard(cards, 1, row), 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);';
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
    const title = document.querySelector('#container .container-fluid > h1');
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
  }

  cardBlock.append(row);
  whereToPut.append(cardBlock);
}

//создание ряда для карточек в заивисмости от их ID и категории

// function generateRowId(categoryId) {
//   if (checker.checked === true) { return`inside${categoryId}Train`; }
//   if (checker.checked !== true) { return`inside${categoryId}Play`; }
// }

//возврат индекса(не используется, но потом пригодится)
// function givIndex(parent, child) {
//   return [].indexOf.call(parent, child);
// }

// попытка сделать по клику на меню - вывод карточек(в процессе)

// let body = document.body;

// function clickOnMenu() {
//   pageMenu.addEventListener('click', function (e) {
//     let insideLink = e.target.closest('a').innerHTML;
//     console.log(insideLink);
//     if (checker.checked === true) {
//       moveInsideCategoryFromMenu(body,rowWithCardsCategoryForTrain)
//
//     } else {
//       moveInsideCategory(rowWithCardsCategoryForPlay, playPage);
//       createPageInsideCategory(insideLink, rowWithCardsCategoryForPlay);
//
//     }
//   });
// }

// function moveInsideCategoryFromMenu() {
//   body.addEventListener('click', function (e) {
//     let divCard = e.target.closest('#container');
//     console.log(divCard);
//   });

// fromWhere.addEventListener('click', function (e) {
//   let divCard = e.target.closest('.card');
//   fromWhere.classList.add('d-none');
//   createPageInsideCategory(divCard.id, toWhere);
// });
// }
