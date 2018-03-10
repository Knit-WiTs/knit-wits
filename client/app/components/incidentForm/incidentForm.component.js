import './incidentForm.component.css';
import controller from './incidentForm.controller.js';
import template from './incidentForm.component.html';

const incidentFormComponent = {
	restrict: 'E',
	bindings: {
		onSwitchPage: '<',
	},
	template,
	controller,
	controllerAs: '$ctrl',
};
export default incidentFormComponent;
