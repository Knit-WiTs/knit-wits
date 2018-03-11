class friendController {
	constructor(Restangular) {
		this.name = 'friend';
		this.Restangular = Restangular;
		this.confirm = false;
	}

	$onInit() {
		console.log(this.user);
		this.trustedfiend = this.user.trustedfiend;
		this.confirm = false;
	}

	set() {
		this.Restangular.one('user/friend').patch({ trustedfiend: this.trustedfiend }).then(() => {
			this.confirm = true;
		});
	}

	static get $inject() {
		return ['Restangular'];
	}
}

export default friendController;
