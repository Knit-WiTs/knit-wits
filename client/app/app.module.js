import 'bootstrap-css-only';
import 'normalize.css';

import ComponentsModule from './components/components';
import angular from 'angular';
import appComponent from './app.component';
import restangular from 'restangular';

angular.module('app', [
	ComponentsModule.name,
	restangular,
]).component('app', appComponent);
