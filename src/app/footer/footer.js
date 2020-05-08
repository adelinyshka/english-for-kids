import { footer } from '../variables';

function hideFooter() {
	footer.classList.remove('d-flex');
	footer.classList.add('d-none');
}

function showFooter() {
	footer.classList.add('d-flex');
	footer.classList.remove('d-none');
}

export { hideFooter, showFooter };