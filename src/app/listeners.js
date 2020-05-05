import { resetBtn } from './generate-variables';

function resetStats() {
  resetBtn.addEventListener('click', function () {
    localStorage.clear();
    location.reload();
  });
}

export { resetStats };