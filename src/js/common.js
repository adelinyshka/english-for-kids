let hamburgerIcon = document.querySelector('.hamburger');

let pageMenu = document.querySelector('ul');

hamburgerIcon.addEventListener('click', function () {
  pageMenu.classList.toggle('d-none');
  console.log('im working');
});
