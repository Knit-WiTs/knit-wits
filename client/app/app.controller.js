class appController {
	constructor() {
		this.name = 'app';
		this.page = 'search';

		this.switchPage = page => {
			this.page = page;
		};
	}
}


export default appController;
