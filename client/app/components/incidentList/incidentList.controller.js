class incidentListController {
	constructor(Restangular) {
		this.name = 'incidentList';
		this.Restangular = Restangular;
	}

	static get $inject() {
		return ['Restangular'];
	}

	$onInit() {
		const self = this;

		this.Restangular.all('incidents').getList().then(incidents => {
			self.incidents = incidents.plain();
		});
	}
}

export default incidentListController;
