import './incidentList.component.css';
import controller from './incidentList.controller.js';
import template from './incidentList.component.html';

const incidentListComponent = {
	restrict: 'E',
	bindings: {
		onSwitchPage: '<',
	},
	template,
	controller,
	controllerAs: 'incidentListController',
};
export default incidentListComponent;
