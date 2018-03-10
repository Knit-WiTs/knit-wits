import angular from 'angular';
import incidentFormComponent from './incidentForm.component';

const incidentFormModule = angular.module('incidentForm', [])
.component('incidentForm', incidentFormComponent);
export default incidentFormModule;
