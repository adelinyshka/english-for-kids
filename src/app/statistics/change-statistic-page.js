import { statisticsPage } from '../variables';

function createStatisticsPage() {
  statisticsPage.classList.remove('display-none');
}

function removeStatisticsPage() {
  statisticsPage.classList.add('display-none');
}

export { createStatisticsPage, removeStatisticsPage };
