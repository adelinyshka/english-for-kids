import CardComponent from '../card/card.component';
import cards from '../data/cards';
import {  rowForAnswers, titleInHeader,trainMode, playMode, btnStartGame } from '../variables';
import categoryData from '../data/category';



function createPageInsideCategory(divCardId, whereToPut) {
	const cardBlock = document.createElement('div');
	const row = document.createElement('div');
	const secondRow = document.createElement('div');
	const bgColorTrain = 'linear-gradient(to top, #fff1eb' + ' 0%, #ace0f9 100%);';
	const bgColorPlay = 'linear-gradient(to top,' + ' #feada6 0%, #f5efef 100%);';

	titleInHeader.innerText = divCardId;
	cardBlock.classList.add('d-block');
	row.classList.add('row');
	secondRow.classList.add('col-12', 'd-flex', 'justify-content-center');
	let card = new CardComponent();

	if (trainMode()) {
		row.id = `inside${divCardId}Train`;
		for (let i = 0; i < categoryData.length; i++) {
			if (categoryData[i].word === divCardId) {
				card.iterateArrCard(cards, i, row, bgColorTrain);
			}
		}
	}

	if (playMode()) {
		row.id = `inside${divCardId}Play`;
		for (let i = 0; i < categoryData.length; i++) {
			if (categoryData[i].word === divCardId) {
				card.iterateArrCardPlay(cards, i, row, bgColorPlay);
			}
		}

		row.append(secondRow);
		row.append(rowForAnswers);
		secondRow.append(btnStartGame);
	}

	cardBlock.append(row);
	whereToPut.append(cardBlock);
}

export { createPageInsideCategory };