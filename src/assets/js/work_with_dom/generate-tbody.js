import cards from '../data/cards.data';
import categoryData from '../data/category.data';

function generateTbody(cards) {
  let dataWithCategories;
  let result = [];
  function getEnWords() {
    for (let i = 0; i < cards[0].length; i++) {
      dataWithCategories = cards[0][i].word;
      result.push(dataWithCategories);
    }

    cards.forEach((item, index) => {
      let tableBody = document.querySelector('tbody');
      for (let i = 0; i < 8; i++) {
        // for (let j = 0; j < 8; j++) {
        //   // console.log(result[j]);
        // }

        let tableRow = document.createElement('tr');
        tableRow.innerHTML = `
			<tr>
			<td class="to-insert">category</td>
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

export default generateTbody;
