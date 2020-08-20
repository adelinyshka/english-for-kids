import {checker, playMode, titleInHeader, trainMode} from "../variables";
import {showTrainPage} from "../trainPage/change-train-page";
import {
	creatCategoryForPlay,
	creatCategoryForTrain
} from "../category/create-category";
import {showPlayPage} from "../playPage/change-play-page";
import {createPlayCards, createTrainCards} from "../card/create-card";

function changeLayoutBySwitcher() {

	checker.addEventListener('change', function () {

		let innerTextTitleInHeader = titleInHeader.innerText;

		if(innerTextTitleInHeader !== 'Main') {

			if (trainMode()) {
				createTrainCards(innerTextTitleInHeader);
			}

			if (playMode()) {
				createPlayCards(innerTextTitleInHeader);
			}
		}

		if(innerTextTitleInHeader === 'Main') {

			if(trainMode()) {
				showTrainPage();
				creatCategoryForTrain();
			}
			if (playMode()) {
				showPlayPage();
				creatCategoryForPlay();
			}
		}
	});
}

export {changeLayoutBySwitcher};