import cards from './storage';

window.addEventListener('load', function () {
  changeLayoutByClickCheckbox();
  toggleMenu();
  createMenu();
  // clickOnMenu();
});

let container = document.querySelector('#container');
let trainPage = document.querySelector('#trainPage');
let playPage = document.querySelector('#playPage');
let checker = document.querySelector('#switcher');
let rowWithCardsCategoryForTrain = document.querySelector('#rowWithCardsCategoryForTrain');
let rowWithCardsCategoryForPlay = document.querySelector('#rowWithCardsCategoryForPlay');
let animalCategory = document.querySelector('#insideCategoryAnimals');
let rowWithAllCards = document.querySelector('.special-row');

//====== карточка со словами

class Card {
  constructor(id, audio, img_src, wordEn, wordRu, bgColor) {
    //внутри карточки
    this.id = id;
    this.audio = audio;
    this.img_src = img_src;
    this.wordEn = wordEn;
    this.wordRu = wordRu;
    this.bgColor = bgColor;

    //состояние карточки
    this.isTurned = false;
    this.isTrainMode = false;
    this.isPlayMode = false;

    //учет для статистики
    this.clickedInPlayMode = 0;
    this.clickedInTrainMode = 0;
    this.guessRight = 0;
    this.guessWrong = 0;
  }

  createCard(wordEn, wordRu) {
    let cardWord = document.createElement('div');
    cardWord.classList.add('col-3');
    cardWord.innerHTML = `
      <div class="scene">
          <div class="card" id="idFor${wordEn}" style="width: 13rem; height: 300px;">
            <audio src="./assets/audio/${wordEn}.mp3" id="audioFor${wordEn}"></audio>
              <div class="card-face front"><img class="card-img-top" src="./assets/img/${wordEn}.jpg" alt="${wordEn}" style="width:100%;" />
                  <div class="card-body">
                      <h5 class="card-title front">${wordEn}</h5>
                      <a class="btn-turn btn btn-warning" href="#" data-button="data-button">&curarr;</a></div>
              </div>
              <div class="card-face back"><img class="card-img-top" src="./assets/img/${wordEn}.jpg" alt="${wordRu}" style="width:50%;" />
                  <div class="card-body">
                      <h5 class="card-title back">${wordRu}</h5>
                  </div>
              </div>
          </div>
      </div>
     `;
    return cardWord;
  }

  //генерация массива карточек
  iterateArrCard(arr, num, where) {
    arr.forEach((item, index) => {
      let card = this.createCard(arr[num][index].word, arr[num][index].translation);
      where.append(card);
    });
  }
}

//данные по категориям
const categoryData = [
  {
    //1
    word: 'Animals',
    pic: './assets/img/animals.png',
  },
  {
    //2
    word: 'Dishes',
    pic: './assets/img/dishes-1.png',
  },
  {
    word: 'Fruits',
    pic: './assets/img/fruits2.png',
  },
  {
    word: 'House',
    pic: './assets/img/house-1.png',
  },
  {
    word: 'Nature',
    pic: './assets/img/nature-1.png',
  },
  {
    word: 'Tales',
    pic: './assets/img/tales-1.png',
  },
  {
    word: 'Toys',
    pic: './assets/img/toys-1.png',
  },
  {
    word: 'Vegetables',
    pic: './assets/img/vegetables2.png',
  },
];

//====== создание гамбургера меню

let pageMenu = document.querySelector('ul');
//генерация списка меню
function createMenu() {
  categoryData.forEach((item) => {
    let menuList = document.createElement('li');
    menuList.classList.add('p-1');
    let menuListLink = document.createElement('a');
    menuList.append(menuListLink);
    menuListLink.innerText = item.word;
    pageMenu.append(menuList);
  });
}

//скрытие/открытие меню по клику
function toggleMenu() {
  let hamburgerIcon = document.querySelector('.hamburger');

  hamburgerIcon.addEventListener('click', function () {
    pageMenu.classList.toggle('d-none');
  });
}

//====== отрисовка экрана в зависимости от положения свитчера

window.addEventListener('load', function () {
  if (checker.checked === true) {
    playPage.classList.remove('d-block');
    playPage.classList.add('d-none');
    trainPage.classList.remove('d-none');
    trainPage.classList.add('d-block');
  } else {
    trainPage.classList.remove('d-block');
    trainPage.classList.add('d-none');
    playPage.classList.remove('d-none');
    playPage.classList.add('d-block');
  }
});

//====== смена режима тренировка/игра по клику на свитчер

function changeLayoutByClickCheckbox() {
  document.addEventListener('change', function () {
    //train
    if (checker.checked === true) {
      playPage.classList.remove('d-block');
      playPage.classList.add('d-none');
      trainPage.classList.remove('d-none');
      trainPage.classList.add('d-block');
    }
    //play
    if (checker.checked !== true) {
      trainPage.classList.remove('d-block');
      trainPage.classList.add('d-none');
      playPage.classList.remove('d-none');
      playPage.classList.add('d-block');
    }
  });
}

//====== создание страницы с категориями

function createCategories(arr, where, bgColor) {
  arr.forEach((card) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('col-3');

    cardElement.innerHTML =
      `<div class="card category-card" style="background:${bgColor};width: 13rem; height: 200px;margin:10px;" id=${card.word}>` +
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
  'linear-gradient(135deg, #e1ffff 0%,#e1ffff 7%,#e1ffff 12%,#fdffff' +
    ' 12%,#e6f8fd 30%,#c8eefb 54%,#bee4f8 75%,#b1d8f5 100%);',
);
createCategories(
  categoryData,
  rowWithCardsCategoryForPlay,
  'linear-gradient(135deg, #f9e4df 7%,#fad4cc 15%,#fad4cc 17%,#fad4cc 35%,#f8c9c0 54%,#fffffd 88%);',
);

//====== переключение режима ВНУТРИ категории

function moveInsideCategory(fromWhere, toWhere) {
  fromWhere.addEventListener('click', function (e) {
    let divCard = e.target.closest('.card');
    fromWhere.classList.add('d-none');
    createPageInsideCategory(divCard.id, toWhere);
  });
}

moveInsideCategory(rowWithCardsCategoryForTrain, trainPage);
moveInsideCategory(rowWithCardsCategoryForPlay, playPage);

//поворот карточки(не работает для нескольких)
// todo сделать поворот карточки

let cardClicked = document.querySelector('.card');
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

//====== создание страницы  внутри категории

function createPageInsideCategory(divCardId, whereToPut) {
  let cardBlock = document.createElement('div');

  let row = document.createElement('div');
  cardBlock.classList.add('d-block');
  row.classList.add('row');
  if (checker.checked === true) {
    row.id = `inside${divCardId}Train`;

    //не получилось по-другому пока, только так 8-|
    if (divCardId === 'Animals') {
      let card = new Card();
      card.iterateArrCard(cards, 0, row);
    }

    if (divCardId === 'Dishes') {
      let card = new Card();
      card.iterateArrCard(cards, 1, row);
    }

    if (divCardId === 'Fruits') {
      let card = new Card();
      card.iterateArrCard(cards, 2, row);
    }

    if (divCardId === 'House') {
      let card = new Card();
      card.iterateArrCard(cards, 3, row);
    }
    if (divCardId === 'Nature') {
      let card = new Card();
      card.iterateArrCard(cards, 4, row);
    }
    if (divCardId === 'Tales') {
      let card = new Card();
      card.iterateArrCard(cards, 5, row);
    }

    if (divCardId === 'Toys') {
      let card = new Card();
      card.iterateArrCard(cards, 6, row);
    }

    if (divCardId === 'Vegetables') {
      let card = new Card();
      card.iterateArrCard(cards, 7, row);
    }
  }

  if (checker.checked !== true) {
    let title = document.querySelector('#container .container-fluid > h1');
    row.id = `inside${divCardId}Play`;
    if (divCardId === 'Animals') {
      let card = new Card();
      card.iterateArrCard(cards, 0, row);
    }

    if (divCardId === 'Dishes') {
      let card = new Card();
      card.iterateArrCard(cards, 1, row);
    }

    if (divCardId === 'Fruits') {
      let card = new Card();
      card.iterateArrCard(cards, 2, row);
    }

    if (divCardId === 'House') {
      let card = new Card();
      card.iterateArrCard(cards, 3, row);
    }
    if (divCardId === 'Nature') {
      let card = new Card();
      card.iterateArrCard(cards, 4, row);
    }
    if (divCardId === 'Tales') {
      let card = new Card();
      card.iterateArrCard(cards, 5, row);
    }

    if (divCardId === 'Toys') {
      let card = new Card();
      card.iterateArrCard(cards, 6, row);
    }

    if (divCardId === 'Vegetables') {
      let card = new Card();
      card.iterateArrCard(cards, 7, row);
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
