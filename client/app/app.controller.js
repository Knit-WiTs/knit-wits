class appController {
	constructor(Restangular) {
		this.name = 'app';
		this.page = 'search';

		this.switchPage = page => {
			this.page = page;
		};

		Restangular.setBaseUrl('/api');

		this.Restangular = Restangular;
	}

	$onInit() {
		this.Restangular.one('user').get().then(user => {
			if (!user.passphrase) {
				this.go('password');
			}

			this.user = user;
			this.loaded = true;
		});
	}

	go(page) {
		this.page = page;
		this.showMenu = false;
	}

	static get $inject() {
		return ['Restangular'];
	}
}


export default appController;
