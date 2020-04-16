window.onload = function () {
  moveToCategory();
  toggleMenuHamburgerHandler();
  changeLayoutByCheckboxHandler();
};

let container = document.querySelector('#container');
let trainPage = document.querySelector('#trainPage');
let playPage = document.querySelector('#playPage');
let checker = document.querySelector('#switcher');
let rowWithCards = document.querySelector('#rowWithCardsCategory');

let animalCategory = document.querySelector('#insideCategoryAnimals');

function moveToCategory() {
  rowWithCards.addEventListener('click', function (e) {
    let divCard = e.target.closest('.card');
    if (divCard.id === 'animals') {
      rowWithCards.classList.add('d-none');
      animalCategory.classList.remove('d-none');
      animalCategory.classList.add('d-block');
    }
  });
}

function toggleMenuHamburgerHandler() {
  let hamburgerIcon = document.querySelector('.hamburger');
  let pageMenu = document.querySelector('ul');

  hamburgerIcon.addEventListener('click', function () {
    pageMenu.classList.toggle('d-none');
    console.log('Hamburger works!'); //DEL!
  });
}

function changeLayoutByCheckboxHandler() {
  document.addEventListener('change', function () {
    //train
    if (checker.checked === true) {
      playPage.classList.remove('d-block');
      playPage.classList.add('d-none');
      trainPage.classList.remove('d-none');
      trainPage.classList.add('d-block');
      console.log('I check switcher position'); //DEL!
    }
    //play
    if (checker.checked !== true) {
      trainPage.classList.remove('d-block');
      trainPage.classList.add('d-none');
      playPage.classList.remove('d-none');
      playPage.classList.add('d-block');
      console.log('I TOO check switcher position'); //DEL!
    }
  });
}

// при загрузке dom смотреть за состоянием чекбокса и в заивисмости от него
// подгружать что надо
window.addEventListener('load', function () {
  if (checker.checked === true) {
    console.log('I check DOM reload ' + checker.checked); //DEL
    playPage.classList.remove('d-block');
    playPage.classList.add('d-none');
    trainPage.classList.remove('d-none');
    trainPage.classList.add('d-block');
  } else {
    console.log('Im too! I check DOM reload ' + checker.checked); //DEL
    trainPage.classList.remove('d-block');
    trainPage.classList.add('d-none');
    playPage.classList.remove('d-none');
    playPage.classList.add('d-block');
  }
});

// картинка
// слово
//перевод
//аудио
//состояние

class Card {
  constructor(id, img_src, wordEn, wordRu, categoryName, linkToCategory, audio) {
    this.id = id;
    this.img_src = img_src;
    this.wordRu = wordRu;
    this.wordEn = wordEn;
    this.categoryName = categoryName;
    this.linkToCategory = linkToCategory;
    // this.audio = audio;

    this.isCategoryCard = true;

    this.isTurned = false;
    this.isTrainMode = false;

    this.isPlayMode = false;

    //статистика
    this.clickedInPlayMode = 0;
    this.clickedInTrainMode = 0;
    this.guessRight = 0;
    this.guessWrong = 0;
  }

  //
  createCategoryCard() {
    let categoryCard = document.createElement('div');

    categoryCard.classList.add('card', 'category-card');
    categoryCard.style =
      'width: 13rem;height: 200px;' + ' width:200px;margin:10px;display:inline-block;';
    categoryCard.href = this.href;
    categoryCard.id = this.id;

    let cardFace = document.createElement('div');
    cardFace.classList.add('card-face');

    categoryCard.append(cardFace);

    let pic = document.createElement('img');
    pic.classList.add('card-img-top');
    pic.src = this.img_src;
    pic.style = 'width:70%';
    cardFace.append(pic);

    let cardBody = document.createElement('div');
    pic.classList.add('card-body');
    categoryCard.append(cardBody);

    let titleH5 = document.createElement('h5');
    titleH5.classList.add('card-title', 'front');
    titleH5.innerText = this.categoryName;
    cardFace.append(titleH5);

    let col = document.createElement('div');
    col.classList.add('col-3');

    rowWithCards.append(col);

    col.append(categoryCard);
  }

  getMistakesRate() {
    return (this.guessWrong / this.clickedInPlayMode) * 100 + '%';
  }
}

const categoriesId = [
  'animals',
  'body_parts',
  'food',
  'house',
  'nature',
  'toys',
  'tales',
  'dishes',
];

const categoriesImages = [
  './assets/img/animals.png',
  './assets/img/fruits.jpg',
  './assets/img/vegetables.jpg',
  './assets/img/house.png',
  './assets/img/nature.png',
  './assets/img/toys.jpg',
  './assets/img/tales.jpg',
  './assets/img/watermelon.png',
];

const categoriesNames = [
  'Animals',
  'Fruits',
  'Vegetables',
  'House',
  'Nature',
  'Toys',
  'Tales',
  'Dishes',
];

const linkToCategoryCards = [
  '',
  'google.com',
  'mail.ru',
  'yahoo.com',
  'ya.ru',
  'google.com',
  'mail.ru',
  'yahoo.com',
];

for (let i = 0; i < 8; i++) {
  let card = new Card(categoriesId[i], categoriesImages[i], 'hello', 'привет', categoriesNames[i]);
  card.createCategoryCard();
  console.log(card);
}

// const putValues = '';
// let card = new Card('animals', './assets/img/watermelon.png', 'hello', 'привет', 'Animals');
// card.createCard();
// console.log(card);

// constructor(id, img_src, wordEn, wordRu, audio, categoryName) {

// let card = new Card();
// card.createCard('animals', 'Animals');

// console.log(cardBee.getMistakesRate());
