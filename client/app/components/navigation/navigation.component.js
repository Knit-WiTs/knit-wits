import './navigation.component.css';
import controller from './navigation.controller.js';
import template from './navigation.component.html';

const navigationComponent = {
	restrict: 'E',
	bindings: {
		onSwitchPage: '<',
		currentPage: '<',
		user: '<',
	},
	template,
	controller,
	controllerAs: '$ctrl',
};
export default navigationComponent;
