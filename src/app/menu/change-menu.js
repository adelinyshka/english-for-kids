import {
  container,
  pageMenu,
} from '../generate-variables';


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

export { toggleMenu, hideMenu };
