import './password.component.css';
import controller from './password.controller.js';
import template from './password.component.html';

const passwordComponent = {
	restrict: 'E',
	bindings: {},
	template,
	controller,
	controllerAs: '$ctrl',
};
export default passwordComponent;
