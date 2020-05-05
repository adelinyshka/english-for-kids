import categoryData from '../data/category.data';
import { rowWithCardsCategoryForPlay, rowWithCardsCategoryForTrain } from '../generate-variables';

function createCategories(arr, where, bgColor, color) {
  const col12 = document.createElement('div');
  col12.classList.add('col-12', 'text-center');
  const title = document.createElement('h3');
  title.style.fontWeight = 'bold';
  title.innerText = 'Main menu';
  col12.append(title);
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
    where.prepend(col12);
  });
}

function creatCategoryForTrain() {
  createCategories(categoryData, rowWithCardsCategoryForTrain, '#0B95CC', 'white');
}

function creatCategoryForPlay() {
  createCategories(categoryData, rowWithCardsCategoryForPlay, '#FFDD76', 'black');
}

export { createCategories, creatCategoryForTrain, creatCategoryForPlay };
