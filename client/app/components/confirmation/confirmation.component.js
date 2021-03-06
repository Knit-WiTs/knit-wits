import './confirmation.component.css';
import controller from './confirmation.controller.js';
import template from './confirmation.component.html';

const confirmationComponent = {
	restrict: 'E',
	bindings: {
		onSwitchPage: '<',
	},
	template,
	controller,
	controllerAs: '$ctrl',
};
export default confirmationComponent;
