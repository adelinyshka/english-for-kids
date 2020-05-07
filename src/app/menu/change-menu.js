import {
  container,
  pageMenu,
  titleInHeader,

} from '../generate-variables';

function toggleMenu() {
  const hamburgerIcon = document.querySelector('.hamburger');

  container.addEventListener('click', function (e) {
    if (e.target === hamburgerIcon) {

      const menuLinks = Array.from(pageMenu.querySelectorAll('li a'));

      menuLinks.forEach((item) => {
        if(item.innerText === titleInHeader.innerText){
          item.classList.add('active-link');
        }
        else {
          item.classList.remove('active-link');
        }
      });

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
