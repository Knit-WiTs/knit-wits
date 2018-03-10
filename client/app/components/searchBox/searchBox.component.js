import template from './searchBox.component.html';
import controller from './searchBox.controller.js';
import './searchBox.component.scss';

let searchBoxComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'searchBoxController'
};
export default searchBoxComponent;