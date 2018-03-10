class appController {
	constructor(Restangular) {
		this.name = 'app';
		this.page = 'search';

		this.switchPage = page => {
			this.page = page;
		};

		Restangular.setBaseUrl('https://knit-wits.herokuapp.com/api');
	}

	static get $inject() {
		return ['Restangular'];
	}
}


export default appController;
