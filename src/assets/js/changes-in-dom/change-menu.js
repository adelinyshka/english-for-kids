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
    } else {
      pageMenu.classList.add('d-none');
    }
  });
}

function hideMenu() {
  pageMenu.classList.add('d-none');
}

export { changeMenuBg, toggleMenu, hideMenu };
