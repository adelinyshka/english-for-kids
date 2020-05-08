import { footer } from '../variables';

function hideFooter() {
	footer.classList.add('display-none');
}

function showFooter() {
	footer.classList.remove('display-none');
}

export { hideFooter, showFooter };