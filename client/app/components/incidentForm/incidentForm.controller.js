class incidentFormController {
	constructor(Restangular) {
		this.name = 'incidentForm';
		this.Restangular = Restangular;
		this.model = {};
	}

	static get $inject() {
		return ['Restangular'];
	}

	submit() {
		this.Restangular.all('/incident').post({
			message: this.model.message,
			location: this.model.location,
		});
	}

	viewList() {
		this.onSwitchPage('incident-list');
	}
}

export default incidentFormController;
