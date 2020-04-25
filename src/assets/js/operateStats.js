import cards_and_categoriesData from './cards_and_categories.data';

// import { makeBlur, ask } from './preloader';

function storage(data) {
  // localStorage.setItem('cards_and_categoriesData', JSON.stringify(cards_and_categoriesData));
  //
  // localStorage.setItem(cards_and_categoriesData, JSON.stringify(cards_and_categoriesData));
  // cards_and_categoriesData = JSON.parse(localStorage.getItem('cards_and_categoriesData'));

  let dataWithCategories;
  let result = [];
  function getEnWords() {
    for (let i = 0; i < data[0].length; i++) {
      dataWithCategories = data[0][i].word;
      result.push(dataWithCategories);
    }

    data.forEach((item, index, dataWithCategories) => {
      if (index > 0) {
        let tableBody = document.querySelector('tbody');
        for (let i = 0; i < 8; i++) {
          for (let j = 0; j < 8; j++) {
            // console.log(result[j]);
          }

          let tableRow = document.createElement('tr');
          tableRow.innerHTML = `
			<tr>
			<td class="to-insert">${result[i]}</td>
			<td>${item[i].word}</td>
			<td>${item[i].translation}</td>
			<td>0</td>
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
    data.forEach((item, index) => {
      if (index > 0) {
        for (let i = 1; i < 8; i++) {
          console.log(item[i].translation);
        }
      }
    });
  }
}

export default storage;
