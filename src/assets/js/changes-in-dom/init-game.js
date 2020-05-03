import {
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
} from '../generate-dom/generate-variables';
import { hideHeader, showHeader } from './change-header';
import { createBtnFinishGame } from '../generate-dom/generate-btn-finish-game';
import { returnIdFromAudio, shuffle } from '../helpers';
import {
  cleanAnswerRow,
  createCloudIcon,
  createSunIcon,
} from '../generate-dom/generate-answer-icons';
import { hideFooter, showFooter } from './change-footer';
import { putStatsToLocalStoragePlay } from './../localStorage/put-stats-for-play-mode';
import { putStatsToLocalStoragePlayWrong } from './../localStorage/put-stats-for-play-wrong';
import { putStatsToLocalStoragePlayRight } from './../localStorage/put-stats-for-play-mode-right';

function initGame() {
  let starYes = 0;
  let starNo = 0;

  function playYes() {
    audioYes.play();
  }

  function playNo() {
    audioNo.play();
  }

  //создание ряда для записи ответов
  rowForAnswers.classList.add('row');
  col12.classList.add('col-12', 'row-star');
  rowForAnswers.append(col12);
  col12.innerHTML = '';

  btnStartGame.addEventListener('click', function () {
    hideHeader();
    hideFooter();
    createBtnFinishGame();

    const containerCards = Array.from(document.querySelectorAll('.scene' + ' .card audio'));

    function deleteOne() {
      containerCards.pop();
    }

    function playOnce() {
      if (containerCards[containerCards.length - 1] !== undefined) {
        containerCards[containerCards.length - 1].play();
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

      finalResultText.innerHTML = 'Ошибок: ' + starNo + '.';
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
      setTimeout(function () {
        finalPage.classList.remove('d-flex');
        finalPage.classList.add('d-none');
        starNo = 0;
        containerCards.length = 0;
      }, 3000);
      setTimeout(function () {
        location.reload();
      }, 2900);
    }

    if (btnStartGame.innerText === 'Start Game') {
      //поменять вид кнопки начала игры на repeat
      const iconReload = document.createElement('i');
      iconReload.classList.add('text-light', 'fas', 'fa-redo-alt', 'f-2x');
      btnStartGame.innerHTML = '';
      btnStartGame.classList.add('round-btn');
      btnStartGame.append(iconReload);

      shuffle(containerCards);
      playOnce();

      playPage.addEventListener('click', function (e) {
        let audioId = returnIdFromAudio(containerCards[containerCards.length - 1].id);

        if (e.target.closest('.btn-play') === btnStartGame) {
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
          putStatsToLocalStoragePlay(e.target.alt);
          putStatsToLocalStoragePlayRight(e.target.alt);

          setTimeout(function () {
            e.target.style.opacity = '0.5';
          }, 300);

          if (containerCards.length === 0) {
            setTimeout(function () {
              cleanAnswerRow();
              giveResult();
            }, 1000);
            setTimeout(function () {
              btnStartGame.innerHTML = 'Start Game';
              btnStartGame.classList.remove('round-btn');
            }, 3000);
            setTimeout(function () {
              starYes = 0;
              starNo = 0;
            }, 4000);
          } else {
            setTimeout(playOnce, 900);
          }
        }
        if (audioId !== e.target.alt && e.target.style.opacity === '0.5') {
          putStatsToLocalStoragePlay(e.target.alt);
          putStatsToLocalStoragePlayWrong(audioId);
          putStatsToLocalStoragePlayWrong(e.target.alt);
        }

        if (audioId !== e.target.alt && e.target.closest('.btn-play') !== btnStartGame) {
          createCloudIcon();
          playNo();
          starNo++;
          putStatsToLocalStoragePlay(e.target.alt);
          putStatsToLocalStoragePlayWrong(audioId);
          putStatsToLocalStoragePlayWrong(e.target.alt);
        }
      });
    }
  });
  showHeader();
  showFooter();
}

export { initGame };
