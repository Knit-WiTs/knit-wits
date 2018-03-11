class passwordController {
	constructor(Restangular) {
		this.name = 'password';
		this.Restangular = Restangular;
	}

	set() {
		this.Restangular.one('user/passphrase').patch({ passphrase: this.passphrase }).then(() => {
			global.window.localStorage.setItem('showMsg', 'true');
			global.window.location.reload();
		});
	}

	static get $inject() {
		return ['Restangular'];
	}
}

export default passwordController;
