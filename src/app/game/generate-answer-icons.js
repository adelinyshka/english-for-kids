import { col12 } from '../variables';

function createSunIcon() {
  col12.innerHTML += `
  <div class = 'star m-1 text-warning fas fa-sun fa-3x'></div>
  `;
}

function createCloudIcon() {
  col12.innerHTML += `
  <div class = 'star m-1 text-secondary fas fa-cloud fa-3x'></div>
  `;
}

function cleanAnswerRow() {
  col12.innerHTML = '';
}

export { createSunIcon, createCloudIcon, cleanAnswerRow };
