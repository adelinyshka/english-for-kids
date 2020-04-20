const preloader = document.querySelector('.preloader');
const app = document.querySelector('#containerApp');

function makeBlur() {
  app.classList.add('wrapper-blur');
}

function ask() {
  document.body.addEventListener('click', function (e) {
    if (e.target.closest('.btn.btn-danger')) {
      app.classList.remove('wrapper-blur');
      preloader.style.display = 'none';
    }
  });
}

export { makeBlur, ask };
