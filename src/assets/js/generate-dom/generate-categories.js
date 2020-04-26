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

export { createCategories };
