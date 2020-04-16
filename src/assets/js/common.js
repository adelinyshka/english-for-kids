window.onload = function () {
  changeLayoutOnClickByCheckbox();
  toggleMenuByClickOnHamburger();
};

function toggleMenuByClickOnHamburger() {
  let hamburgerIcon = document.querySelector('.hamburger');
  let pageMenu = document.querySelector('ul');

  hamburgerIcon.addEventListener('click', function () {
    pageMenu.classList.toggle('d-none');
    console.log('Hamburger works!');
  });
}

function changeLayoutOnClickByCheckbox() {
  //сделан контейнер
  let container = document.querySelector('#container');

  //страница с контентом и катер
  let playPage = document.createElement('div');
  playPage.id = 'playPage';
  let title = document.createElement('h1');
  title.innerHTML = 'Im Main Page';
  playPage.appendChild(title);
  let buttonStart = document.createElement('input');
  buttonStart.setAttribute('type', 'submit');
  buttonStart.setAttribute('value', 'Start Game');
  buttonStart.classList.add('btn', 'btn-danger');
  console.log(buttonStart);
  playPage.appendChild(buttonStart);

  ////страница с контентом 2
  let trainPage = document.createElement('div');
  trainPage.id = 'trainPage';
  let title2 = document.createElement('h1');
  title2.innerHTML = 'Im Category Page!';
  trainPage.appendChild(title2);

  //по клику на чекбокс - менять странички
  document.addEventListener('change', function () {
    // var checker = event.target;
    let checker = document.querySelector('#switcher');
    if (checker.checked === true) {
      console.log(checker.checked + ' checker changes on click to blue');
      if (container.hasChildNodes(trainPage)) {
        container.removeChild(trainPage);
        container.appendChild(playPage);
      } else {
        container.appendChild(playPage);
      }
    }
    if (checker.checked !== true) {
      if (container.hasChildNodes(playPage)) {
        container.removeChild(playPage);
        container.appendChild(trainPage);
      } else {
        container.appendChild(trainPage);
      }
      console.log(checker.checked + ' checker changes on click to RED');
    }
  });

  //при загрузке dom смотреть за состоянием чекбокса и в заивисмости от него
  // подгружать что надо
  document.addEventListener('DOMContentLoaded', function () {
    let checker = document.querySelector('#switcher');
    if (checker.checked === true) {
      console.log('On DOM load checker is ' + checker.checked);
      if (container.hasChildNodes(trainPage)) {
        container.removeChild(trainPage);
        container.appendChild(playPage);
      } else {
        container.appendChild(playPage);
      }
    } else {
      console.log('On DOM load checker is ' + checker.checked);
      if (checker.checked !== true) {
        if (container.hasChildNodes(playPage)) {
          container.removeChild(playPage);
          container.appendChild(trainPage);
        } else {
          container.appendChild(trainPage);
        }
      }
    }
  });
}

// картинка
// слово
//перевод
//аудио
//состояние

class Card {
  constructor(state) {
    this.state = state;
    this.content = '';
  }
}
