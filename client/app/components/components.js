import IncidentFormModule from './incidentForm/incidentForm.module';
import IncidentListModule from './incidentList/incidentList.module';
import SearchBoxModule from './searchBox/searchBox.module';
import angular from 'angular';

const ComponentsModule = angular.module('app.components', [
	IncidentFormModule.name,
	SearchBoxModule.name,
	IncidentListModule.name,
]);

export default ComponentsModule;
