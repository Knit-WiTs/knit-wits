import template from './incidentForm.component.html';
import controller from './incidentForm.controller.js';
import './incidentForm.component.css';

let incidentFormComponent = {
  restrict: 'E',
  bindings: {
    onSwitchPage: '<',
  },
  template,
  controller,
  controllerAs: '$ctrl'
};
export default incidentFormComponent;