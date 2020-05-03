import cards from '../data/cards.data';
import categoryData from '../data/category.data';

function generateTbodyStatistic(cards) {
  let dataWithCategories;
  let result = [];
  function getEnWords() {
    categoryData.forEach((item) => {
      for (let i = 0; i < 8; i++) {
        dataWithCategories = item.word;
        result.push(dataWithCategories);
      }
      return result;
    });

    cards.forEach((item, index) => {
      let tableBody = document.querySelector('tbody');
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 1; j++) {
          let neededPoint;
          if (localStorage.getItem(item[i].word) === null) {
            neededPoint = 0;
          } else {
            neededPoint = localStorage.getItem(item[i].word);
          }

          let tableRow = document.createElement('tr');
          tableRow.innerHTML = `
			<tr>
			<td class="to-insert">${categoryData[index].word}</td>
			<td>${item[i].word}</td>
			<td>${item[i].translation}</td>
			<td>${neededPoint}</td>
			<td>0</td>
			<td>0</td>
			<td>0</td>
			<td>0</td>
			<tr>
			`;
          tableBody.append(tableRow);
        }
      }
    });
  }

  getEnWords();

  function getRuWords() {
    cards.forEach((item, index) => {
      if (index > 0) {
        for (let i = 1; i < 8; i++) {
          console.log(item[i].translation);
        }
      }
    });
  }
}

export default generateTbodyStatistic;
