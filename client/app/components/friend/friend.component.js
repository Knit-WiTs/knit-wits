import './friend.component.css';
import controller from './friend.controller.js';
import template from './friend.component.html';

const friendComponent = {
	restrict: 'E',
	bindings: {
		onSwitchPage: '<',
		user: '<',
	},
	template,
	controller,
	controllerAs: '$ctrl',
};
export default friendComponent;
