import 'bootstrap-css-only';
import 'normalize.css';

import ComponentsModule from './components/components';
import angular from 'angular';
import appComponent from './app.component';

angular.module('app', [
	ComponentsModule.name,
]).component('app', appComponent);
