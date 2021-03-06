import './searchBox.component.css';
import controller from './searchBox.controller.js';
import template from './searchBox.component.html';

const searchBoxComponent = {
	restrict: 'E',
	bindings: {
		onSwitchPage: '<',
		user: '<',
	},
	template,
	controller,
	controllerAs: '$ctrl',
};
export default searchBoxComponent;
