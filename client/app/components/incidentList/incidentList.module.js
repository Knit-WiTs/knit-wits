import angular from 'angular';
import incidentListComponent from './incidentList.component';

const incidentListModule = angular.module('incidentList', [])
.component('incidentList', incidentListComponent);
export default incidentListModule;
