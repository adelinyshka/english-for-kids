import cards from './storage';

window.onload = function () {
  changeLayoutByCheckboxHandler();
  toggleMenuHamburgerHandler();
};

//по клику на ряд - находим кнопочку

let checkCard = document.querySelector('.special-row');
let cardFace = document.querySelector('.card');

checkCard.addEventListener('click', function (e) {
  let btn = e.target.closest('a.btn-turn');

  if (e.target === btn) {
    cardFace.classList.add('is-flipped');
  } else audio.play();
});

cardFace.addEventListener('mouseleave', function (e) {
  if (e.target.classList.contains('is-flipped')) {
    cardFace.classList.remove('is-flipped');
  }
});

let container = document.querySelector('#container');
let trainPage = document.querySelector('#trainPage');
let playPage = document.querySelector('#playPage');
let checker = document.querySelector('#switcher');
let rowWithCards = document.querySelector('#rowWithCardsCategory');
let rowWithCardsForPlay = document.querySelector('#rowWithCardsCategoryForPlay');
let animalCategory = document.querySelector('#insideCategoryAnimals');

//====== создание гамбургера меню

function toggleMenuHamburgerHandler() {
  let hamburgerIcon = document.querySelector('.hamburger');
  let pageMenu = document.querySelector('ul');

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

function changeLayoutByCheckboxHandler() {
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

//====== создание категорий

const categoryData = [
  {
    word: 'Animals',
    pic: './assets/img/animals.png',
  },
  {
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

createCategories(categoryData, rowWithCards, 'blue');
createCategories(categoryData, rowWithCardsForPlay, 'red');

//====== создание страницы внутри категории

function createPageInsideCategory(id, whereToPut) {
  let cardBlock = document.createElement('div');
  cardBlock.classList.add('d-block');
  if (checker.checked === true) {
    cardBlock.id = `insideCategoryTrain${id}`;
  }
  if (checker.checked !== true) {
    let title = document.querySelector('#container .container-fluid > h1');
    cardBlock.id = `insideCategoryPlay${id}`;
  }

  let row = document.createElement('div');
  row.classList.add('row');

  if (checker.checked === true) {
    row.innerHTML = 'yes i can boogie!';
  }
  if (checker.checked !== true) {
    row.innerHTML = 'and i can play!';
  }

  cardBlock.append(row);
  whereToPut.append(cardBlock);
}

//====== переключение режима ВНУТРИ категории

function moveInsideCategory(fromWhere, toWhere) {
  fromWhere.addEventListener('click', function (e) {
    let divCard = e.target.closest('.card');
    fromWhere.classList.add('d-none');
    createPageInsideCategory(divCard.id, toWhere);
  });
}

moveInsideCategory(rowWithCards, trainPage);
moveInsideCategory(rowWithCardsForPlay, playPage);

// вывод картинок
// for (let i = 0; i < 8; i++) {
//   let card = new Card(categoriesId[i], categoriesImages[i], 'hello', 'привет', categoriesNames[i]);
//   card.createCategoryCard();
//   console.log(card);
// }

// картинка
// слово
// перевод
// аудио
// состояние

// id, img_src, wordEn, wordRu, categoryName, linkToCategory, audio
//
class Card {
  constructor() {
    this.id = id;
    this.img_src = img_src;
    this.wordRu = wordRu;
    this.wordEn = wordEn;
    this.audio = audio;

    this.isTurned = false;
    this.isTrainMode = false;
    this.isPlayMode = false;

    //статистика
    this.clickedInPlayMode = 0;
    this.clickedInTrainMode = 0;
    this.guessRight = 0;
    this.guessWrong = 0;
  }

  createCard(url, word) {
    const card = document.createElement('div');
    // cardEl.innerHTML =
    //       `<div class="card" style="width: 13rem; height: 200px;margin:10px;"><audio src="./assets/audio/bear.mp3" autoplay="autoplay"></audio>
    //       `<div class="card-face front"><img class="card-img-top" src="./assets/img/dishes-1.png" alt="..." style="width:40%;" />
    //         <div class="card-body">
    //             <h5 class="card-title front">hello</h5><a class="btn-turn btn btn-warning" href="#" data-button="data-button">&curarr;</a></div>
    //     </div>
    //     <div class="card-face back"><img class="card-img-top" src="src/assets/img/dishes-1.png" alt="" />
    //         <div class="card-body">
    //             <h5 class="card-title back">привет</h5>
    //         </div>
    //     </div>
    // </div>`

    // return cardEl;
  }

  getMistakesRate() {
    return (this.guessWrong / this.clickedInPlayMode) * 100 + '%';
  }
}
//
// class Card2 {
//   constructor(url, word) {
//     this.url = url;
//     this.word = word;
//   }
//
//   createElement(url, word) {
//     const cardEl = document.createElement('div');
//     cardEl.innerHTML =
//       `<div class="card category-card" style="width: 13rem; height: 200px;margin:10px;" id="category">` +
//       `<audio src='./assets/audio/bear.mp3' autoplay='autoplay'></audio>`+
//       `<div class="card-face"><img class="card-img-top"` +
//       ` src="" alt="..." style="width:40%; background: url(${url})"` +
//       `        <div class="card-body">` +
//       `           <h5 class="card-title front">${word}</h5>` +
//       `        </div>` +
//       `    </div>` +
//       `</div>`;
//
//     return cardEl;
//   }
// }
