import CardComponent from './card.component';
import cards from './data/cards.data';
import categoryData from './data/category.data';
import {
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
  btnPlay,
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
} from './work_with_dom/generate-variables';

import generateTbody from './work_with_dom/generate-tbody';
import { sortTable, sortGrid } from './work_with_dom/sort-table';

window.addEventListener('load', function () {
  initFunctions();
});

function initFunctions() {
  createMenu();
  hideMenu();
  changeLayoutByClickCheckbox();
  toggleMenu();
  generateTbody(cards);
  sortTable();
  sortGrid();
}

//====== создание гамбургера меню
firstLi.classList.add('p-1');
firstLi.append(firstA);
firstA.innerHTML = 'Main menu';
pageMenu.append(firstLi);

function createMenu() {
  categoryData.forEach((item) => {
    const menuList = document.createElement('li');
    menuList.classList.add('p-1');
    const menuListLink = document.createElement('a');
    menuList.append(menuListLink);
    menuListLink.innerText = item.word;
    pageMenu.append(menuList);
  });

  const menuListStat = document.createElement('li');
  menuListStat.classList.add('p-1');
  const menuListLinkStat = document.createElement('a');
  menuListLinkStat.innerText = 'Statistics';
  menuListLinkStat.id = 'statistics-menu-link';
  menuListStat.append(menuListLinkStat);
  pageMenu.append(menuListStat);

  function removeButtonGame() {
    btnPlay.classList.add('d-none');
  }

  function returnButtonGame() {
    btnPlay.classList.remove('d-none');
    btnPlay.classList.add('d-block');
  }

  const menuLinks = Array.from(pageMenu.querySelectorAll('li a'));

  menuLinks.forEach((item) => {
    item.addEventListener('click', function (e) {
      if (checker.checked) {
        if (e.target.textContent === 'Main menu') {
          removeStatisticsPage();
          cleanTrainPage();
          createEnviromentForCategories(trainPage, rowWithCardsCategoryForTrain);
          hideMenu();
        } else if (e.target.innerText === 'Statistics') {
          cleanTrainPage();
          createStatisticsPage();
          removeButtonGame();
          hideMenu();
        } else {
          removeStatisticsPage();
          cleanTrainPage();
          createPageInsideCategory(e.target.textContent, trainPage);
          returnButtonGame();
          turnOrAudioOnClick();
          hideMenu();
        }
      }

      if (!checker.checked) {
        if (e.target.textContent === 'Main menu') {
          removeStatisticsPage();
          cleanPlayPage();
          createEnviromentForCategories(playPage, rowWithCardsCategoryForPlay);
          hideMenu();
        } else if (e.target.innerText === 'Statistics') {
          cleanPlayPage();
          createStatisticsPage();
          removeButtonGame();
          hideMenu();
        } else {
          removeStatisticsPage();
          cleanPlayPage();
          createPageInsideCategory(e.target.textContent, playPage);
          returnButtonGame();
          hideMenu();
        }
      }
    });
  });
}

function changeMenuBg(colorClass) {
  if (checker.checked) {
    pageMenu.classList.add(colorClass);
  }
  if (!checker.checked) {
    pageMenu.classList.remove(colorClass);
  }
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

function hideMenu() {
  pageMenu.classList.add('d-none');
}

//генерация списка меню

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
    removeStatisticsPage();

    changeMenuBg('trainColor');
    creatCategoryForTrain();
    showTrainPage();
  } else {
    removeStatisticsPage();

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
        removeStatisticsPage();
        changeMenuBg('trainColor');
        creatCategoryForTrain();
        showTrainPage();
      } else {
        removeStatisticsPage();
        changeMenuBg('trainColor');
        showTrainPage();
      }
    }
    if (!checker.checked) {
      if (rowWithCardsCategoryForPlay.innerHTML === '') {
        removeStatisticsPage();
        changeMenuBg('playColor');
        creatCategoryForPlay();
        showPlayPage();
      } else {
        removeStatisticsPage();
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

containerItem.forEach((a) => a.addEventListener('click', flipCard));

//====== создание страницы  внутри категории

btnPlay.innerHTML = 'Start Game';
btnPlay.style.width = '200px';
btnPlay.classList.add('btn', 'btn-play');

//====== ряд для звезд

rowForAnswers.classList.add('row');
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

function createBtnFinishGame() {
  const blockToInsertBtn = document.querySelector('#playPage.d-block' + ' div.d-block');

  btnFinish.classList.add('btn-danger', 'btn-end');
  btnFinish.value = 'Stop';
  btnFinish.style.maxHeight = '42px';
  btnFinish.style.maxWidth = '100px';
  btnFinish.style.padding = '5px';
  btnFinish.style.borderRadius = '8px';
  btnFinish.style.textAlign = 'center';
  btnFinish.style.cursor = 'pointer';
  btnFinish.style.position = 'absolute';
  btnFinish.style.top = '0px';
  btnFinish.style.right = '10px';
  btnFinish.addEventListener('click', function () {
    location.reload();
  });
  blockToInsertBtn.append(btnFinish);
}

function removeBntFinish() {}

// todo меню работает но с багами- при переключении режимов не меняется на
// новый пункт
//особо глючит переключение на главное меню

function createPageInsideCategory(divCardId, whereToPut) {
  const cardBlock = document.createElement('div');
  const row = document.createElement('div');
  const secondRow = document.createElement('div');
  const title = document.createElement('h3');
  const linkMenu = Array.from(
    document.querySelectorAll('#containerApp' + ' header' + ' nav ul li a'),
  );
  title.classList.add('text-center');
  title.style.letterSpacing = '2px';
  title.style.fontWeight = 'bold';
  title.innerText = divCardId;
  cardBlock.classList.add('d-block');
  cardBlock.append(title);
  row.classList.add('row');
  secondRow.classList.add('col-12', 'd-flex', 'justify-content-center');

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

  // linkMenu.forEach((item) => {
  //   if(checker.checked) {
  //     item.style.color = 'black';
  //     item.style.fontWeight = 'normal';
  //     if (item.innerText === title.innerText) {
  //       item.style.color = 'blue';
  //       item.style.fontWeight = 'bold';
  //     }
  //
  //     else if (item.innerText !== title.innerText) {
  //       item.style.color = 'black';
  //       item.style.fontWeight = 'normal';
  //     }
  //   }
  //
  //   if(!checker.checked) {
  //     if (item.innerText === title.innerText) {
  //       item.style.color = 'violet';
  //       item.style.fontWeight = 'bold';
  //     }
  //
  //     else if (item.innerText !== title.innerText) {
  //       item.style.color = 'white';
  //       item.style.fontWeight = 'normal';
  //     }
  //   }
  // });
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

//возврат значения из id audio
function returnIdFromAudio(word) {
  return word.slice(8);
}

function playYes() {
  audioYes.play();
}

function playNo() {
  audioNo.play();
}

finalResultText.classList.add('d-flex', 'align-items-center', 'flex-column', 'text-secondary');

close.addEventListener('click', function () {
  finalPage.classList.add('d-none');
  cleanPlayPage();
  createEnviromentForCategories(playPage, rowWithCardsCategoryForPlay);
});

function hideHeader() {
  header.classList.remove('d-flex');
  header.classList.add('d-none');
}

function showHeader() {
  header.classList.add('d-flex');
  header.classList.remove('d-none');
}

let starYes = 0;
let starNo = 0;

function initGame() {
  btnPlay.addEventListener('click', function () {
    hideHeader();
    createBtnFinishGame();
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
          finalResultText.append(finalImg);
        } else {
          document.querySelector('#badEnd').play();
          finalImg.classList.add('final-img', 'badResult');
          finalResultText.append(finalImg);
        }

        finalTitle.append(finalResultText);
        showHeader();
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

        if (e.target === btnFinish) {
          return;
        }

        if (e.target.alt == null) {
          return;
        }

        if (audioId === e.target.alt) {
          playYes();
          deleteOne();
          createSunIcon();
          starYes++;

          setTimeout(function () {
            e.target.style.opacity = '0.5';
          }, 300);

          if (containerCards.length === 0) {
            setTimeout(function () {
              cleanAnswerRow();
              giveResult();
            }, 1000);
            setTimeout(function () {
              btnPlay.innerHTML = 'Start Game';
              btnPlay.classList.remove('round-btn');
            }, 3000);

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
  showHeader();
}

initGame();

function createStatisticsPage() {
  statisticsPage.classList.remove('d-none');
  statisticsPage.classList.add('d-block');
}

function removeStatisticsPage() {
  statisticsPage.classList.add('d-none');
  statisticsPage.classList.remove('d-block');
}