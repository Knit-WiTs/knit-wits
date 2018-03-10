import template from './searchBox.component.html';
import controller from './searchBox.controller.js';
import './searchBox.component.css';

let searchBoxComponent = {
  restrict: 'E',
  bindings: {
    onSwitchPage: '<',
  },
  template,
  controller,
  controllerAs: '$ctrl'
};
export default searchBoxComponent;