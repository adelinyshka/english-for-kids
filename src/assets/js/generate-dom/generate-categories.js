import categoryData from '../data/category.data';
import { rowWithCardsCategoryForPlay, rowWithCardsCategoryForTrain } from './generate-variables';

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

export { createCategories, creatCategoryForTrain, creatCategoryForPlay };
