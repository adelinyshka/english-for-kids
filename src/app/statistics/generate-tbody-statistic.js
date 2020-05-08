import categoryData from '../data/category';

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
          let neededPointsTrain;
          if (localStorage.getItem(item[i].word) === null) {
            neededPointsTrain = 0;
          } else {
            neededPointsTrain = localStorage.getItem(item[i].word);
          }

          let neededPointsPlay;
          if (localStorage.getItem(item[i].word + ' play') === null) {
            neededPointsPlay = 0;
          } else {
            neededPointsPlay = localStorage.getItem(item[i].word + ' play');
          }
          let neededPointsRight;
          if (localStorage.getItem(item[i].word + ' right') === null) {
            neededPointsRight = 0;
          } else {
            neededPointsRight = localStorage.getItem(item[i].word + ' right');
          }

          let neededPointsWrong;
          if (localStorage.getItem(item[i].word + ' wrong') === null) {
            neededPointsWrong = 0;
          } else {
            neededPointsWrong = localStorage.getItem(item[i].word + ' wrong');
          }

          let percentWrong;
          if (localStorage.getItem(item[i].word + ' wrong') === null) {
            percentWrong = 0;
          } else {
            percentWrong = Math.round(
              100 /
                (localStorage.getItem(item[i].word + ' right') /
                  localStorage.getItem(item[i].word + ' wrong')),
            );
          }

          let tableRow = document.createElement('tr');
          tableRow.innerHTML = `
			<tr>
			<td class="to-insert">${categoryData[index].word}</td>
			<td>${item[i].word}</td>
			<td>${item[i].translation}</td>
			<td>${neededPointsTrain}</td>
			<td>${neededPointsPlay}</td>
			<td>${neededPointsRight}</td>
			<td>${neededPointsWrong}</td>
			<td>${percentWrong}</td>
			<tr>
			`;
          tableBody.append(tableRow);
        }
      }
    });
  }

  getEnWords();
}

export { generateTbodyStatistic };
