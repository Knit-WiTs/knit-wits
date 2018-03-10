import restangular from 'restangular';

class incidentFormController {
	constructor() {
		this.name = 'incidentForm';
	}

	submit() {
		restangular.one('/incident').post();
	}
}

export default incidentFormController;
