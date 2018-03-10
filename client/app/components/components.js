import IncidentFormModule from './incidentForm/incidentForm.module';
import SearchBoxModule from './searchBox/searchBox.module';
import angular from 'angular';

const ComponentsModule = angular.module('app.components', [
	SearchBoxModule.name,
	IncidentFormModule.name,
]);

export default ComponentsModule;
