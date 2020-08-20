import { header } from '../variables';

function hideHeader() {
	header.classList.add('display-none');
}

function showHeader() {
	header.classList.remove('display-none');
}

export { hideHeader, showHeader };