import template from './app.component.html';
import controller from './app.controller.js';
import './app.component.css';

const AppComponent = {
	restrict: 'E',
	bindings: {},
	template,
	controller,
	controllerAs: '$ctrl'
};

export default AppComponent;
