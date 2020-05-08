import {
  iconReload,
  audioNo,
  audioYes,
  btnFinish,
  col12,
  finalPage,
  finalResultText,
  finalTitle,
  playPage,
  rowForAnswers,
  btnStartGame,
} from '../variables';
import { createBtnFinishGame } from './generate-btn-finish-game';
import { returnIdFromAudio, shuffle } from '../helpers';
import {
  cleanAnswerRow,
  createCloudIcon,
  createSunIcon,
} from './generate-answer-icons';
import { putStatsToLocalStoragePlay } from '../statistics/put-stats-for-play-mode';
import { putStatsToLocalStoragePlayWrong } from '../statistics/put-stats-for-play-wrong';
import { putStatsToLocalStoragePlayRight } from '../statistics/put-stats-for-play-mode-right';
import { hideFooter, showFooter } from './../footer/footer';
import { hideHeader, showHeader } from './../header/header';

function playSoundYes() {
  audioYes.play();
}

function playSoundNo() {
  audioNo.play();
}

function createRowForAnswers() {
  rowForAnswers.classList.add('row');
  col12.classList.add('col-12', 'row-star');
  rowForAnswers.append(col12);
  col12.innerHTML = '';
  playPage.prepend(rowForAnswers);
}

function initGame() {
  let counterAnswerRight = 0;
  let counterAnswerWrong = 0;




  btnStartGame.addEventListener('click', function () {

    const arrayOfCardsOnPage = Array.from(document.querySelectorAll(' #playPage .scene' +
      ' .card > audio'));

    function deleteOneCardFromArray() {
      arrayOfCardsOnPage.pop();
    }

    function playCardAudio() {
      if (arrayOfCardsOnPage[arrayOfCardsOnPage.length - 1] !== undefined) {
        arrayOfCardsOnPage[arrayOfCardsOnPage.length - 1].play();
      }
    }

    function giveResult() {
      finalPage.classList.remove('d-none');
      finalResultText.classList.add(
        'd-flex',
        'align-items-center',
        'flex-column',
        'text-secondary',
      );

      finalResultText.innerHTML = 'Ошибок: ' + counterAnswerWrong + '.';
      let finalImg = document.createElement('div');

      if (counterAnswerWrong === 0) {
        document.querySelector('#goodEnd').play();
        finalImg.classList.add('final-img', 'goodResult');
        finalResultText.append(finalImg);
      } else {
        document.querySelector('#badEnd').play();
        finalImg.classList.add('final-img', 'badResult');
        finalResultText.append(finalImg);
      }

      finalTitle.append(finalResultText);
      setTimeout(function () {
        finalPage.classList.remove('d-flex');
        finalPage.classList.add('d-none');
        counterAnswerWrong = 0;
        arrayOfCardsOnPage.length = 0;
        location.reload();
      }, 3000);
    }



    if (btnStartGame.innerText === 'Start Game') {

      hideHeader();
      hideFooter();
      createBtnFinishGame();
      createRowForAnswers();

      btnStartGame.innerHTML = '';
      btnStartGame.classList.add('round-btn');
      btnStartGame.append(iconReload);

      shuffle(arrayOfCardsOnPage);
      playCardAudio();

      playPage.addEventListener('click', function (e) {

        let audioId = returnIdFromAudio(arrayOfCardsOnPage[arrayOfCardsOnPage.length - 1].id);
        if (e.target.closest('.btn-play') === btnStartGame) {
          playCardAudio();
        }

        if (e.target === btnFinish) {
          return;
        }

        if (e.target.alt == null) {
          return;
        }

        if (audioId === e.target.alt) {
          playSoundYes();
          deleteOneCardFromArray();
          createSunIcon();
          counterAnswerRight++;
          putStatsToLocalStoragePlay(e.target.alt);
          putStatsToLocalStoragePlayRight(e.target.alt);

            e.target.style.opacity = '0.5';

          if (arrayOfCardsOnPage.length === 0) {
            setTimeout(function () {
              cleanAnswerRow();
              giveResult();
              btnStartGame.innerHTML = 'Start Game';
              btnStartGame.classList.remove('round-btn');
            },1000);

            setTimeout(function () {
              counterAnswerRight = 0;
              counterAnswerWrong = 0;
            }, 4000);
          }

          else {
            setTimeout(playCardAudio, 900);
          }
        }
        if (audioId !== e.target.alt && e.target.style.opacity === '0.5') {
          return;
        }

        if (audioId !== e.target.alt && e.target.closest('.btn-play') !== btnStartGame && e.target.style.opacity !== '0.5') {
          createCloudIcon();

          playSoundNo();
          counterAnswerWrong++;
          putStatsToLocalStoragePlay(audioId);
          putStatsToLocalStoragePlayWrong(audioId);
        }
      });
    }
  });

}

export { initGame };
