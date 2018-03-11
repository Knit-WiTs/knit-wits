class navigationController {
	constructor(Restangular) {
		this.name = 'navigation';
		this.Restangular = Restangular;
		this.showMenu = false;
	}

	$onInit() {
		const self = this;

		this.Restangular.one('user').get().then(user => {
			if (!user.passphrase) {
				self.go('password');
			}

			self.user = user;
			this.loaded = true;
		});
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
