import { header } from '../generate-variables';

function hideHeader() {
	header.classList.remove('d-flex');
	header.classList.add('d-none');
}

function showHeader() {
	header.classList.add('d-flex');
	header.classList.remove('d-none');
}

export { hideHeader, showHeader };