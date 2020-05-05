import { trainMode } from '../generate-variables';

class CardComponent {
  createCard(wordEn, wordRu, bgColor) {
    const cardWord = document.createElement('div');
    cardWord.classList.add(
      'col-sm-6',
      'col-md-4',
      'col-lg-3',
      'col-12',
      'justify-content-center',
      'd-flex',
    );

    cardWord.innerHTML = `
      <div class="scene">
          <div class="card" id="idFor${wordEn}" style="width: 13rem; height: 300px;">
            <audio src="./assets/audio/${wordEn}.mp3" id="audioFor${wordEn}"></audio>
              <div class="card-face front" style="background:${bgColor}"><img class="card-img-top card-animation-img" src="./assets/img/${wordEn}.jpg" alt="${wordEn}" 
              style="width:100%;" />
                  <div class="card-body">
                      <h5 class="card-title front card-animation-h5">${wordEn}</h5>
                      <a class="btn-turn btn btn-warning card-animation-btn" href="#" data-button="data-button">&curarr;</a></div>
              </div>
              <div class="card-face back"><img class="card-img-top" src="./assets/img/${wordEn}.jpg" alt="${wordRu}" style="width:100%;" />
                  <div class="card-body">
                      <h3 class="card-title back" style="display:inline;vertical-align:bottom">${wordRu}</h3>
                  </div>
              </div>
          </div>
      </div>
     `;
    return cardWord;
  }

  createCardPlayMode(wordEn) {
    const cardWord = document.createElement('div');
    cardWord.classList.add(
      'col-sm-6',
      'col-md-4',
      'col-lg-3',
      'col-12',
      'justify-content-center',
      'd-flex',
    );

    cardWord.innerHTML = `
      <div class="scene" style="width: 16rem;">
          <div class="card card-animation-play" id="idFor${wordEn}" style="width: 13rem; height: 140px;">
            <audio src="./assets/audio/${wordEn}.mp3" id="audioFor${wordEn}"></audio>
              <div class="card-face front">
              <img class="card-img-top" src="./assets/img/${wordEn}.jpg" alt="${wordEn}" 
              style="width:100%;" />
          </div>
      </div>
      </div>
     `;
    return cardWord;
  }

  //генерация массива карточек для тренировки
  iterateArrCard(arr, num, where, bgColor) {
    arr.forEach((item, index) => {
      let card = this.createCard(arr[num][index].word, arr[num][index].translation, bgColor);
      where.append(card);
    });
  }

  //генерация массива карточек для игры
  iterateArrCardPlay(arr, num, where) {
    arr.forEach((item, index) => {
      let card = this.createCardPlayMode(arr[num][index].word);
      where.append(card);
    });
  }
}

export default CardComponent;
