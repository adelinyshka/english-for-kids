import data from './data';

// import { makeBlur, ask } from './preloader';

function storage(data) {
  // localStorage.setItem('data', JSON.stringify(data));
  //
  // localStorage.setItem(data, JSON.stringify(data));
  // data = JSON.parse(localStorage.getItem('data'));

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
            console.log(result[j]);
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

  // let tableRowToInsert = Array.from(document.querySelectorAll('.to-insert'));
  //
  // function getCategories() {
  //   data[0].forEach((word) => {
  //     for (let i = 0; i < 8; i++) {
  //       // tableRowToInsert.forEach((item) => {
  //         item.innerText = `
  //         ${word.word}
  //         `;
  //       // });
  //     }
  //   });
  // }
  //
  // console.log(getCategories());
}

export default storage;
