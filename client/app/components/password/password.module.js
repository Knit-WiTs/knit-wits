import angular from 'angular';
import passwordComponent from './password.component';

const passwordModule = angular.module('password', [])
.component('password', passwordComponent);
export default passwordModule;
