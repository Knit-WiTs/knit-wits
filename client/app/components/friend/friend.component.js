import './friend.component.css';
import controller from './friend.controller.js';
import template from './friend.component.html';

const friendComponent = {
	restrict: 'E',
	bindings: {},
	template,
	controller,
	controllerAs: 'friendController',
};
export default friendComponent;
