import angular from 'angular';
import confirmationComponent from './confirmation.component';

const confirmationModule = angular.module('confirmation', [])
.component('confirmation', confirmationComponent);
export default confirmationModule;
