import {
  audioNo,
  audioYes,
  btnFinish,
  btnPlay,
  col12,
  finalPage,
  finalResultText,
  finalTitle,
  playPage,
  rowForAnswers,
} from '../generate-dom/generate-variables';
import { hideHeader, showHeader } from './change-header';
import { createBtnFinishGame } from '../generate-dom/generate-btn-finish-game';
import { returnIdFromAudio, shuffle } from '../helpers';
import {
  cleanAnswerRow,
  createCloudIcon,
  createSunIcon,
} from '../generate-dom/generate-answer-icons';
import { closeOnClick } from '../listeners';

let starYes = 0;
let starNo = 0;

function initGame() {
  function playYes() {
    audioYes.play();
  }

  function playNo() {
    audioNo.play();
  }

  //создание кнопки для игры
  btnPlay.innerHTML = 'Start Game';
  btnPlay.style.width = '200px';
  btnPlay.classList.add('btn', 'btn-play');

  //создание ряда для записи ответов
  rowForAnswers.classList.add('row');
  col12.classList.add('col-12', 'row-star');
  rowForAnswers.append(col12);
  col12.innerHTML = '';

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
        }, 3000);
        setTimeout(function () {
          location.reload();
        }, 2900);
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

export { initGame };
