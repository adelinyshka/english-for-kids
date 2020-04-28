import { checker, container, pageMenu } from '../generate-dom/generate-variables';

function changeMenuBg(colorClass) {
  if (checker.checked) {
    pageMenu.classList.add(colorClass);
  }
  if (!checker.checked) {
    pageMenu.classList.remove(colorClass);
  }
}

function toggleMenu() {
  const hamburgerIcon = document.querySelector('.hamburger');
  container.addEventListener('click', function (e) {
    if (e.target === hamburgerIcon) {
      pageMenu.classList.toggle('d-none');
      hamburgerIcon.classList.toggle('inside');
    } else {
      pageMenu.classList.add('d-none');
      hamburgerIcon.classList.remove('inside');
    }
  });
}

function hideMenu() {
  pageMenu.classList.add('d-none');
}

// todo меню работает но с багами- при переключении режимов не меняется на
function makeActiveLinkDueToPage() {
  linkMenu.forEach((item) => {
    if (checker.checked) {
      item.style.color = 'black';
      item.style.fontWeight = 'normal';
      if (item.innerText === title.innerText) {
        item.style.color = 'blue';
        item.style.fontWeight = 'bold';
      } else if (item.innerText !== title.innerText) {
        item.style.color = 'black';
        item.style.fontWeight = 'normal';
      }
    }

    if (!checker.checked) {
      if (item.innerText === title.innerText) {
        item.style.color = 'violet';
        item.style.fontWeight = 'bold';
      } else if (item.innerText !== title.innerText) {
        item.style.color = 'white';
        item.style.fontWeight = 'normal';
      }
    }
  });
}

//2
// linkMenu.forEach((item) => {
//   if(checker.checked) {
//     item.style.color = 'black';
//     item.style.fontWeight = 'normal';
//     if (item.innerText === title.innerText) {
//       item.style.color = 'blue';
//       item.style.fontWeight = 'bold';
//     }
//
//     else if (item.innerText !== title.innerText) {
//       item.style.color = 'black';
//       item.style.fontWeight = 'normal';
//     }
//   }
//
//   if(!checker.checked) {
//     if (item.innerText === title.innerText) {
//       item.style.color = 'violet';
//       item.style.fontWeight = 'bold';
//     }
//
//     else if (item.innerText !== title.innerText) {
//       item.style.color = 'white';
//       item.style.fontWeight = 'normal';
//     }
//   }
// });

export { changeMenuBg, toggleMenu, hideMenu };
