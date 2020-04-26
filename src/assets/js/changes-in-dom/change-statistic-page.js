import { statisticsPage } from '../generate-dom/generate-variables';

function createStatisticsPage() {
  statisticsPage.classList.remove('d-none');
  statisticsPage.classList.add('d-block');
}

function removeStatisticsPage() {
  statisticsPage.classList.add('d-none');
  statisticsPage.classList.remove('d-block');
}

export { createStatisticsPage, removeStatisticsPage };
