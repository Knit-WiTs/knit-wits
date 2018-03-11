class searchBoxController {
	constructor() {
		this.name = 'searchBox';
		this.currentTime = new Date();

		this.showMsg = global.window.localStorage.getItem('showMsg') === 'true';
	}

	search() {
		if (this.text === 'easter egg') {
			this.text = '';
			this.onSwitchPage('incident-form');
		} else {
			global.window.location.href = `https://www.google.co.uk/search?q=${ this.text || '' }`;
		}
	}

	dismiss() {
		global.window.localStorage.setItem('showMsg', false);
		this.showMsg = false;
	}
}


export default searchBoxController;
