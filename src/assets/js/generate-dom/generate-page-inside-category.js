import CardComponent from '../card.component';
import cards from '../data/cards.data';
import { btnPlay, rowForAnswers } from './generate-variables';
import { trainMode, playMode } from './generate-variables';

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

  if (trainMode()) {
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

  if (playMode()) {
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

export { createPageInsideCategory };
