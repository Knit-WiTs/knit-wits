class navigationController {
	constructor(Restangular) {
		this.name = 'navigation';
		this.Restangular = Restangular;
		this.showMenu = false;
	}

	go(page) {
		this.onSwitchPage(page);
		this.showMenu = false;
	}

	static get $inject() {
		return ['Restangular'];
	}
}

export default navigationController;
